import React, { useState } from "react";

export default function NoteForm({ onAdd, onRefresh }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <div className="form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите заметку..."
        className="input"
      />
      <button onClick={handleSubmit} className="addBtn">
        ➕ Добавить
      </button>
      <button onClick={onRefresh} className="refreshBtn">
        🔄 Обновить
      </button>
    </div>
  );
}
