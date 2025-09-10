"use client";

import { useState } from "react";
import Header from "../components/Header";
import ItemCards from "../components/ItemCards";
import ExpirationArea from "../components/ExpirationArea";
import Recipe from "../components/Recipe";
import ShoppingList from "../components/ShoppingList";

export default function Page() {
  const [items, setItems] = useState<string[]>([]);
  const [shopping, setShopping] = useState<string[]>([]);
  const [newText, setNewText] = useState("");

  //====冷蔵庫内====
  // +ボタンで庫内に食材追加
  const onClickAddItem = () => {
    setItems([...items, "新しい食材"]);
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
        onClickAdd={onClickAddItem}
        onClickDeleteItem={onClickDeleteItem}
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
