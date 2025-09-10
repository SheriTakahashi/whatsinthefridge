import React from "react";
import "./InputShopping.css";

const InputShopping = ({ newText, onChange, onClick, disabled }) => {
  return (
    <div className="input-area">
      {/*disabledは特定の条件で制御できる*/}
      <input
        disabled={disabled}
        placeholder="買う食材を入力"
        value={newText}
        onChange={onChange}
      />
      <button className="shopping-add" disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

export default InputShopping;
