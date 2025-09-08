import React from "react";
import "./ShoppingList.css";
import InputShopping from "./InputShopping";

const ShoppingList = ({
  shopping,
  onClickDelete,
  newText,
  onChangeNewText,
  onClickAddShopping,
}) => {
  return (
    <div>
      <h1 className="shopping">買い物リスト</h1>

      <div className="shopping-container">
        <div className="shopping-inner">
          <InputShopping
            newText={newText}
            onChange={onChangeNewText}
            onClick={onClickAddShopping}
          />
          <ul>
            {shopping.map((item, index) => (
              <li key={index}>
                <div className="list-row">
                  <p className="shopping-list">{item}</p>
                  <button
                    className="delete-botton"
                    onClick={() => onClickDelete(index)}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
