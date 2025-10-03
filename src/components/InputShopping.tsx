import React from "react";
import "./InputShopping.css";

type Props = {
  newText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled?: boolean;
};

const InputShopping = ({
  newText,
  onChange,
  onClick,
  disabled = false,
}: Props) => {
  return (
    <div className="input-area">
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
