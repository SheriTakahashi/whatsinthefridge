import React from "react";
import "./ItemCardEdit.css";

type Props = {
  onClickDelete: () => void;
  onClickEdit: () => void;
};

const ItemCardEdit = ({ onClickDelete, onClickEdit }: Props) => {
  return (
    <div className="edit-container">
      <button className="edit-button" onClick={onClickEdit}>
        編集
      </button>
      <button className="delete-button" onClick={onClickDelete}>
        ×
      </button>
    </div>
  );
};

export default ItemCardEdit;
