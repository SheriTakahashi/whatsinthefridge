import React from "react";
import "./DeleteButton.css";

type Props = {
  onClickDelete: () => void;
};

const DeleteButton = ({ onClickDelete }: Props) => {
  return (
    <button className="delete-button" onClick={onClickDelete}>
      ×
    </button>
  );
};

export default DeleteButton;
