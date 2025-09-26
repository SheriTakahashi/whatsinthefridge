import React from "react";
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
import "./ExpirationArea.css";

type Item = { id: number; categoryId: string; expiration: string };

type Props = {
  items: Item[];
  onClickDeleteItem: (id: number) => void;
  onClickEditItem: (id: number) => void;
};

// アイコンマップ
const iconMap: Record<string, any> = {
  carrot: faCarrot,
  "drumstick-bite": faDrumstickBite,
  fish: faFish,
  egg: faEgg,
  "wine-bottle": faWineBottle,
  "ice-cream": faIceCream,
  "pizza-slice": faPizzaSlice,
  "apple-whole": faAppleWhole,
};

const ExpirationArea = ({
  items,
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
    <div className="expiration-area">
      <h1 className="alert">消費期限間近</h1>
      <div className="itemCard">
        {items.map((item) => (
          <div key={`exp-${item.id}`} className="item-container">
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
      </div>
    </div>
  );
};

export default ExpirationArea;
