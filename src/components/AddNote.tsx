import React, { useState } from 'react';

interface Note {
  id: number;
  content: string;
}

function AddNote() {
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note: Note = { id: 0, content };

    fetch('http://localhost:5175/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    })
      .then(() => setContent(''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
