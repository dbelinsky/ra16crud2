import React, { useState, useEffect } from 'react';

interface Note {
  id: number;
  content: string;
}

function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('http://localhost:5175/notes')
      .then(response => response.json())
      .then((data: Note[]) => setNotes(data));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:5175/notes/${id}`, { method: 'DELETE' })
      .then(() => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
      });
  };

  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
