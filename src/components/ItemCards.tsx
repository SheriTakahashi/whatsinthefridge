import React from "react";
import AddButton from "./AddButton";
import ItemCardEdit from "./ItemCardEdit";
import "./ItemCards.css";

type Props = {
  items: string[];
  onClickAdd: () => void;
  onClickDeleteItem: (index: number) => void;
};

const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
};

const ItemCards = ({ items, onClickAdd, onClickDeleteItem }: Props) => {
  const today = new Date();

  return (
    <div>
      <h1>冷蔵庫</h1>
      <div className="itemCard">
        {items.map((item, i) => (
          <div key={`item-${i}`} className="item-container">
            <span className="icon">🥕</span>
            <p className="name">{item}</p>
            <p className="expirationDate">{formatDate(today)}</p>

            {/* hoverで表示する編集・削除ボタン */}
            <ItemCardEdit
              onClickEdit={() => console.log("編集:", item)}
              onClickDelete={() => onClickDeleteItem(i)}
            />
          </div>
        ))}

        {/* +ボタン */}
        <AddButton onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default ItemCards;
