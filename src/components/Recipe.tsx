import React from "react";

const Recipe = () => {
  return (
    <div className="recipe-container">
      <h1 className="recommend">おすすめのレシピ</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-list">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
