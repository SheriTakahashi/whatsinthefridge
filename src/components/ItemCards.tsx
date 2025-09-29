import React from "react";
import AddButton from "./AddButton";
import ItemCardEdit from "./ItemCardEdit";
import categories from "../data/categories.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faDrumstickBite,
  faFish,
  faEgg,
  faWineBottle,
  faIceCream,
  faPizzaSlice,
  faAppleWhole,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./ItemCards.css";

type Item = { id: number; categoryId: string; expiration: string };

type Props = {
  items: Item[];
  onClickAdd: () => void;
  onClickDeleteItem: (id: number) => void;
  onClickEditItem: (id: number) => void;
};

// アイコンマップ
const iconMap: Record<string, IconDefinition> = {
  carrot: faCarrot,
  "drumstick-bite": faDrumstickBite,
  fish: faFish,
  egg: faEgg,
  "wine-bottle": faWineBottle,
  "ice-cream": faIceCream,
  "pizza-slice": faPizzaSlice,
  "apple-whole": faAppleWhole,
};

const ItemCards = ({
  items,
  onClickAdd,
  onClickDeleteItem,
  onClickEditItem,
}: Props) => {
  const getIcon = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category && iconMap[category.icon]) {
      return (
        <FontAwesomeIcon icon={iconMap[category.icon]} className="food-icon" />
      );
    }
    return <span>❓</span>;
  };

  return (
    <div>
      <h1>冷蔵庫</h1>
      {/*スマホは１列・ミニタブレット3列・タブレットで4列・PCで5列*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <div key={`item-${item.id}`} className="item-container">
            <span className="icon">{getIcon(item.categoryId)}</span>
            <p className="name">
              {categories.find((c) => c.id === item.categoryId)?.name || "不明"}
            </p>
            <p className="expirationDate">{item.expiration}</p>
            <ItemCardEdit
              onClickEdit={() => onClickEditItem(item.id)}
              onClickDelete={() => onClickDeleteItem(item.id)}
            />
          </div>
        ))}
        <AddButton onClickAdd={onClickAdd} />
      </div>
    </div>
  );
};

export default ItemCards;
