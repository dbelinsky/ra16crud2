import React, { useState } from 'react'
import NotesList from './components/NotesList'
import AddNote from './components/AddNote'
import RefreshNotes from './components/RefreshNotes'

function App() {
  const [notes, setNotes] = useState([]);

  const handleRefresh = (data) => {
    setNotes(data);
  };

  return (
    <div>
      <AddNote />
      <RefreshNotes onRefresh={handleRefresh} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
