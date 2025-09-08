"use client";

import { useState } from "react";
import Header from "../components/Header";
import ItemCards from "../components/ItemCards";
import ExpirationArea from "../components/ExpirationArea";
import Recipe from "../components/Recipe";
import ShoppingList from "../components/ShoppingList";

export default function Page() {
  const [expirations, setExpirations] = useState<string[]>([]);
  const [shopping, setShopping] = useState<string[]>([]);
  const [newText, setNewText] = useState("");

  //====消費期限リスト====
  const onClickDeleteExpiration = (index: number) => {
    const itemCard = [...expirations];
    //特定の配列の中から何番目の要素を何個削除する
    itemCard.splice(index, 1);
    setExpirations(itemCard);
  };

  // +ボタン押したときの処理
  const onClickAddExpiration = () => {
    // とりあえず仮データを追加
    setExpirations([...expirations, "新しい食材"]);
  };

  // ====買い物リスト====
  //入力欄に文字が入った時の処理
  const onChangeNewText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewText(event.target.value);

  //追加ボタンを押した時の処理
  const onClickAddShopping = () => {
    if (newText === "") return; //入力欄に何も入ってない時は追加ボタンは反応しない
    setShopping([...shopping, newText]); //更新する
    setNewText(""); //追加後空文字にする
  };

  //xボタンを押した時の処理
  const onClickDeleteShopping = (index: number) => {
    const list = [...shopping];
    list.splice(index, 1);
    setShopping(list);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <ItemCards onClickAdd={onClickAddExpiration} />
      <ExpirationArea
        expirations={expirations}
        onClickDelete={onClickDeleteExpiration}
      />
      <Recipe />
      <ShoppingList
        shopping={shopping}
        onClickDelete={onClickDeleteShopping}
        newText={newText}
        onChangeNewText={onChangeNewText}
        onClickAddShopping={onClickAddShopping}
        disabled={newText === ""}
      />
    </div>
  );
}
