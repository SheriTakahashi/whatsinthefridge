import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="title">冷蔵庫管理アプリ</h1>
        <button className="receipt">
          <FontAwesomeIcon icon={faReceipt} style={{ color: "#ffffff" }} />
          レシートを読み取る
        </button>
      </div>
    </header>
  );
};

export default Header;
