import React from "react";

const ShoppingList = ({ shopping, onClickDelete }) => {
  return (
    <div className="recipe-container">
      <ul>
        {shopping.map((item, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="shopping-list">{item}</p>
              <button onClick={() => onClickDelete(index)}>×</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
