import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p style={{ color: "#888" }}>Нет заметок</p>;
  }

  return (
    <div className="notesList">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
