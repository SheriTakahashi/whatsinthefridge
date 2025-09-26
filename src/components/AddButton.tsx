import React from "react";
import "./AddButton.css";

type Props = {
  onClickAdd: () => void;
};

const AddButton = ({ onClickAdd }: Props) => {
  return (
    <div>
      <button className="add-button" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
};

export default AddButton;
