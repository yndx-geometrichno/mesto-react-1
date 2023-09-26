import React from "react";

export default function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__header">{title}</h2>
        <form
          name={name}
          action="#"
          method="get"
          className="popup__form popup__form-profile"
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            value="Сохранить"
            className="popup__save-btn"
          >
            Сохранить
          </button>
        </form>
        <button
          aria-label="Закрыть"
          type="button"
          className="popup__close-btn"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
