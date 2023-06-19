import React from "react";
import "./popupMessage.css";
import { TPopupMessage } from "./type";

const PopupMessage: React.FC<TPopupMessage & { id: number }> = ({
  isShow,
  onCancel,
  onConfirm,
  id,
}) => {
  return (
    <>
      {isShow && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <p style={{ textAlign: "center" }}>
              Are you sure you want to remove this entry?
            </p>
            <button
              className="btn"
              style={{ color: "white", backgroundColor: "green" }}
              onClick={() => onConfirm(id)}
            >
              OK
            </button>
            <button
              className="btn"
              style={{ color: "white", backgroundColor: "red" }}
              onClick={onCancel}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMessage;
