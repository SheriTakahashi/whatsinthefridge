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

  const categories = [
    "野菜",
    "肉",
    "魚",
    "乳製品",
    "飲み物",
    "スイーツ",
    "お惣菜",
  ];

  //＋を押したらモーダルが開く
  const handleOpenModal = () => setIsModalOpen(true);

  //モーダルの追加ボタンで食材を追加
  const handleConfirmAdd = (name: string, expiration: string) => {
    setItems([...items, { name, expiration }]);
    setIsModalOpen(false);
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
        onClickAdd={() => setIsModalOpen(true)}
        onClickDeleteItem={(i) => {
          const updated = [...items];
          updated.splice(i, 1);
          setItems(updated);
        }}
        onClickDeleteItem={onClickDeleteItem}
      />
      <AddItemModal
        categories={categories}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmAdd}
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
