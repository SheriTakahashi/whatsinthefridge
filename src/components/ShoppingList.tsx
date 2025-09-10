import React from "react";
import "./ShoppingList.css";
import InputShopping from "./InputShopping";
import DeleteButton from "./DeleteButton";

const ShoppingList = ({
  shopping,
  newText,
  onChangeNewText,
  onClickAddShopping,
  onClickDeleteShopping,
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
                  <DeleteButton
                    onClickDelete={() => onClickDeleteShopping(index)}
                  />
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
