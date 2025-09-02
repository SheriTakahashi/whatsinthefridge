import React from "react";

const ShoppingList = () => {
  return (
    <div className="recipe-container">
      <h1 className="shopping">買い物リスト</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-list">{todo}</p>
              <button onClick={() => onClickBack(index)}>×</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
