import React from "react";
import AddButton from "./AddButton";
import ItemCardEdit from "./ItemCardEdit";
import "./ItemCards.css";

type Item = { name: string; expiration: string };

type Props = {
  items: Item[];
  onClickAdd: () => void;
  onClickDeleteItem: (index: number) => void;
  onClickEditItem: (index: number) => void;
};

const ItemCards = ({
  items,
  onClickAdd,
  onClickDeleteItem,
  onClickEditItem,
}: Props) => {
  return (
    <div>
      <h1>冷蔵庫</h1>
      <div className="itemCard">
        {items.map((item, i) => (
          <div key={`item-${i}`} className="item-container">
            <span className="icon">🥕</span>
            <p className="name">{item.name}</p>
            <p className="expirationDate">{item.expiration}</p>

            {/* hoverで表示する編集・削除ボタン */}
            <ItemCardEdit
              onClickEdit={() => onClickEditItem(i)}
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
