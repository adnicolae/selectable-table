import React from "react";
import Button from "../button/button";
import "./modal.scss";

const Modal = ({ title, active, handleClose, children }) => {
  const modalClassNames = active ? "modal show-modal" : "modal hide-modal";

  return (
    <div className={modalClassNames}>
      <section className="modal__content">
        <h2 className="modal__header">{title}</h2>
        {children}
        <Button onClick={handleClose} aria-label="Close Modal">
          Close
        </Button>
      </section>
    </div>
  );
};

export default Modal;
