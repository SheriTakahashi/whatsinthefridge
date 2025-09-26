"use client";

import { useState } from "react";
import Header from "../components/Header";
import ItemCards from "../components/ItemCards";
import ExpirationArea from "../components/ExpirationArea";
import Recipe from "../components/Recipe";
import ShoppingList from "../components/ShoppingList";
import AddItemModal from "../components/AddItemModal";
import categories from "../data/categories.json";

type Item = { id: number; categoryId: string; expiration: string };

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [shopping, setShopping] = useState<string[]>([]);
  const [newText, setNewText] = useState("");

  // ==== モーダル管理 ====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // 残り日数を計算
  const getDaysLeft = (expiration: string) => {
    const today = new Date();
    const exp = new Date(expiration);
    const diffTime = exp.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // モーダルを開く（追加）
  const onClickOpenModal = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  // 編集ボタン
  const onClickEditItem = (id: number) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  // モーダルの確定処理（追加 or 編集）
  const onClickConfirmModal = (categoryId: string, expiration: string) => {
    if (editingId !== null) {
      // 編集モードだったら該当アイテムを更新
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, categoryId, expiration } : item
        )
      );
    } else {
      // 新規モードだったら新しいアイテムを追加
      setItems([...items, { id: Date.now(), categoryId, expiration }]);
    }

    setIsModalOpen(false);
    setEditingId(null);
  };

  // 削除ボタン
  const onClickDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // ==== 買い物リスト ====
  const onChangeNewText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewText(event.target.value);

  const onClickAddShopping = () => {
    if (newText === "") return;
    setShopping([...shopping, newText]);
    setNewText("");
  };

  const onClickDeleteShopping = (index: number) => {
    const updated = [...shopping];
    updated.splice(index, 1);
    setShopping(updated);
  };

  // 残り2日で消費期限間近エリアへ
  const nearExpirationItems = items.filter(
    (item) => getDaysLeft(item.expiration) <= 2
  );
  const normalItems = items.filter((item) => getDaysLeft(item.expiration) > 2);

  // 編集対象アイテム
  const editingItem =
    editingId !== null ? items.find((i) => i.id === editingId) || null : null;

  return (
    <div className="flex flex-col items-center">
      <Header />

      {/* 冷蔵庫エリア */}
      <ItemCards
        items={normalItems}
        onClickAdd={onClickOpenModal}
        onClickDeleteItem={onClickDeleteItem}
        onClickEditItem={onClickEditItem}
      />

      {/* モーダル */}
      <AddItemModal
        categories={categories}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingId(null);
        }}
        onAdd={onClickConfirmModal}
        editingItem={editingItem}
      />

      {/* 消費期限間近エリア */}
      <ExpirationArea
        items={nearExpirationItems}
        onClickDeleteItem={onClickDeleteItem}
        onClickEditItem={onClickEditItem}
      />

      <Recipe />
      <ShoppingList
        shopping={shopping}
        newText={newText}
        onChangeNewText={onChangeNewText}
        onClickAddShopping={onClickAddShopping}
        onClickDeleteShopping={onClickDeleteShopping}
        disabled={newText === ""}
      />
    </div>
  );
}
