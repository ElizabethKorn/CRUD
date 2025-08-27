import React from "react";

export default function NoteItem({ note, onDelete }) {
  return (
    <div className="noteCard">
      <span>{note.content}</span>
      <button onClick={() => onDelete(note.id)} className="deleteBtn">
        ❌
      </button>
    </div>
  );
}
