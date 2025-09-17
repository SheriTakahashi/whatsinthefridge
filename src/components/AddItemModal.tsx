import React, { useState } from "react";
import "./AddItemModal.css";

type Props = {
  categories: string[];
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, expiration: string) => void;
};

const AddItemModal = ({ categories, isOpen, onClose, onConfirm }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("野菜");
  const [expirationDate, setExpirationDate] = useState("");

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [y, m, d] = dateString.split("-");
    return `${y}/${m}/${d}`;
  };

  const handleConfirm = () => {
    if (!selectedCategory || !expirationDate) return;
    onConfirm(selectedCategory, formatDate(expirationDate));
    setSelectedCategory("野菜");
    setExpirationDate("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>食材を追加</h2>

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
          賞味期限:
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>

        <div className="modal-actions">
          <button onClick={handleConfirm}>追加</button>
          <button onClick={onClose}>キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
