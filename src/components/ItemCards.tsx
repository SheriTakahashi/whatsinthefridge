import React from "react";
import items from "../data/items.json";
import AddButton from "./AddButton";
import "./ItemCards.css";

type Props = {
  onClickAdd: () => void;
};

// 消費期限を yyyy/mm/dd 形式にする
const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
};

const ItemCards = ({ onClickAdd }: Props) => {
  const today = new Date();

  return (
    <div>
      <h1>冷蔵庫</h1>
      <div className="itemCard">
        {items.map((item, i) => {
          const expirationDate = new Date(today);
          expirationDate.setDate(today.getDate() + item.expiresInDays);

          return (
            <div key={i} className="item-container">
              <span className="icon">{item.emoji}</span>
              <p className="name">{item.name}</p>
              <p className="expirationDate">{formatDate(expirationDate)}</p>
            </div>
          );
        })}

        {/* グリッドの最後に＋ボタンを置く */}
        <AddButton onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default ItemCards;
