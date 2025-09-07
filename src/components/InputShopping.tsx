import React from "react";

const InputShopping = ({ newText, onChange, onClick, disabled }) => {
  return (
    <div className="input-area">
      <h1 className="shopping">買い物リスト</h1>
      {/*disabledは特定の条件で制御できる*/}
      <input
        disabled={disabled}
        placeholder="買う食材を入力"
        value={newText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

export default InputShopping;
