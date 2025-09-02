import React from "react";
import "./AddButton.css";

const AddButton = ({ onClickAdd }) => {
  return (
    <div>
      <button className="add-button" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
};

export default AddButton;
