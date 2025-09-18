"use client";

import { useState } from "react";
import Header from "../components/Header";
import ItemCards from "../components/ItemCards";
import ExpirationArea from "../components/ExpirationArea";
import Recipe from "../components/Recipe";
import ShoppingList from "../components/ShoppingList";
import AddItemModal from "../components/AddItemModal";

export default function Page() {
  const [items, setItems] = useState<{ name: string; expiration: string }[]>(
    []
  );
  const [shopping, setShopping] = useState<string[]>([]);
  const [newText, setNewText] = useState("");

  //====冷蔵庫内====
  //モーダル管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const categories = [
    "野菜",
    "肉",
    "魚",
    "乳製品",
    "飲み物",
    "スイーツ",
    "お惣菜",
  ];

  //＋ボタン押下でモーダルが開く
  const onClickOpenModal = () => {
    setEditingIndex(null); // 新規追加なので編集対象なし
    setIsModalOpen(true);
  };

  //編集ボタン押下でモーダルが開く
  const onClickEditItem = (index: number) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  // モーダルの「追加 / 更新」確定処理
  const onClickConfirmModal = (name: string, expiration: string) => {
    if (editingIndex !== null) {
      // 更新ボタン押下で既存カードを更新
      const updated = [...items];
      updated[editingIndex] = { name, expiration };
      setItems(updated);
    } else {
      // 追加ボタン押下で新しいカードを追加
      setItems([...items, { name, expiration }]);
    }
    setIsModalOpen(false);
    setEditingIndex(null);
  };

  // xボタンで庫内の食材削除
  const onClickDeleteItem = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  //====消費期限リスト====
  const onClickDeleteExpiration = (index: number) => {
    const itemCard = [...items];
    itemCard.splice(index, 1);
    setItems(itemCard);
  };

  // ====買い物リスト====
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

  return (
    <div className="flex flex-col items-center">
      <Header />
      <ItemCards
        items={items}
        onClickAdd={onClickOpenModal}
        onClickDeleteItem={onClickDeleteItem}
        onClickEditItem={onClickEditItem}
      />
      <AddItemModal
        categories={categories}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingIndex(null);
        }}
        onAdd={onClickConfirmModal}
        editingItem={editingIndex !== null ? items[editingIndex] : null}
      />
      <ExpirationArea />
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
