import React from "react";
import "./modal.css";

const Modal = ({
  children,
  modalStyle,
  backdropOpacity = 0.5,
  visible,
  setVisible,
  disableCloseButton = false,
}) => {
  return (
    <div
      class="modalBackdrop"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
        display: !visible && "none",
      }}
    >
      <div class="modal" style={modalStyle}>
        {children}
        {!disableCloseButton && (
          <div class="modalClose" onClick={() => setVisible(false)}>
            <img
              src={require("./close.png")}
              style={{ height: 25, width: 25 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
