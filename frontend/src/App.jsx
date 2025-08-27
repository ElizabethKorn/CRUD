import React, { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:7070/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async (content) => {
    await fetch("http://localhost:7070/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content }),
    });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:7070/notes/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Заметки</h1>
      <NoteForm onAdd={addNote} onRefresh={fetchNotes} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
