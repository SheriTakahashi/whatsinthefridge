import React from "react";
import "./ExpirationArea.css";

const ExpirationArea = ({ expirations, onClickDelete }) => {
  return (
    <div className="expiration-area">
      <h1 className="alert">消費期限間近</h1>
      <ul>
        {expirations.map((item, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="expiration-list">{item}</p>
              <button onClick={() => onClickDelete(index)}>×</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpirationArea;
