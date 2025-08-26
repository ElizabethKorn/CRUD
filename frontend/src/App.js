import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:7070/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    await fetch("http://localhost:7070/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content: newNote }),
    });
    setNewNote("");
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

      <div className="form">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Введите заметку..."
          className="input"
        />
        <button onClick={addNote} className="addBtn">
          ➕ Добавить
        </button>
        <button onClick={fetchNotes} className="refreshBtn">
          🔄 Обновить
        </button>
      </div>

      <div className="notesList">
        {notes.length === 0 ? (
          <p style={{ color: "#888" }}>Нет заметок</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="noteCard">
              <span>{note.content}</span>
              <button onClick={() => deleteNote(note.id)} className="deleteBtn">
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
