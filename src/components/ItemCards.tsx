import React from "react";

interface ItemCardProps {
  name: string;
  icon: string;
  expirationDate: string;
}

const ItemCard = ({ name, icon, expirationDate }: ItemCardProps) => {
  return (
    <div className="item-container">
      <span className="icon">{icon}</span>
      <p className="name">{name}</p>
      <p className="expirationDate">{expirationDate}</p>
    </div>
  );
};

export default ItemCard;
