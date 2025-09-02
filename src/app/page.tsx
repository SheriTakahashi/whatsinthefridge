"use client";

import { useState } from "react";
import Header from "../components/Header";
import ItemCards from "../components/ItemCards";
import ExpirationArea from "../components/ExpirationArea";
import Recipe from "../components/Recipe";
import ShoppingList from "../components/ShoppingList";
import AddButton from "../components/AddButton";

export default function Page() {
  const [expirations, setExpirations] = useState<string>([]);

  //xボタンを押した時の処理
  const onClickDelete = (index: number) => {
    // とりあえず仮データを追加
    const itemCard = [...expirations, "牛乳 9/2"];
    //特定の配列の中から何番目の要素を何個削除する
    itemCard.splice(index, 1);
    setExpirations(itemCard);
  };

  // +ボタン押したときの処理
  const onClickAdd = () => {
    // とりあえず仮データを追加
    setExpirations([...expirations, "新しい食材"]);
  };

  return (
    <div>
      <Header />
      <ItemCards />
      <AddButton onClickAdd={onClickAdd} />
      <ExpirationArea expirations={expirations} onClickDelete={onClickDelete} />
      <Recipe />
      <ShoppingList />
    </div>
  );
}
