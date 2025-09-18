import React, { useState } from "react";
import "./AddItemModal.css";

type Props = {
  categories: string[];
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, expiration: string) => void;
};

const AddItemModal = ({ categories, isOpen, onClose, onAdd }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("野菜");
  const [expirationDate, setExpirationDate] = useState("");

  //＋ボタンと編集ボタンを押したかの判断
  const onClickAddModal = () => {
    if (!expirationDate) return; //日付が空白なら追加できない
    onAdd(selectedCategory, expirationDate);
    setSelectedCategory("野菜");
    setExpirationDate("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>食材を追加</h1>

        <label>
          カテゴリ:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label>
          消費期限:
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>

        <div className="modal-actions">
          <button onClick={onClickAddModal}>追加</button>
          <button onClick={onClose}>キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
