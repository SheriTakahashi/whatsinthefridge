import React, { useState, useEffect } from "react";
import "./AddItemModal.css";

type Item = { id: number; categoryId: string; expiration: string };

type Props = {
  categories: { id: string; name: string }[];
  isOpen: boolean;
  onClose: () => void;
  onAdd: (categoryId: string, expiration: string) => void;
  editingItem: Item | null;
};

const AddItemModal = ({
  categories,
  isOpen,
  onClose,
  onAdd,
  editingItem,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("vegetable");
  const [expirationDate, setExpirationDate] = useState("");

  // モーダルが開いたときに初期化 or 編集対象の値をセット
  useEffect(() => {
    if (!isOpen) return;

    if (editingItem) {
      // 編集モードなら既存の値をセット
      setSelectedCategory(editingItem.categoryId);
      setExpirationDate(editingItem.expiration);
    } else {
      // 新規追加モードなら初期化
      setSelectedCategory("vegetable");
      setExpirationDate("");
    }
  }, [isOpen, editingItem]);

  const handleConfirm = () => {
    if (!expirationDate) return; // 日付が空なら保存しない
    onAdd(selectedCategory, expirationDate);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* モーダルのタイトル切り替え */}
        <h1>{editingItem ? "食材を編集" : "食材を追加"}</h1>

        <label>
          カテゴリ:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
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
          {/* ボタンラベル切り替え */}
          <button className="choose-button" onClick={handleConfirm}>
            {editingItem ? "更新" : "追加"}
          </button>
          <button className="cancel-button" onClick={onClose}>
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
