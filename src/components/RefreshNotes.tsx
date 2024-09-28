import React, { useState } from 'react';

interface Note {
  id: number;
  content: string;
}

interface Props {
  onRefresh: (data: Note[]) => void;
}

function RefreshNotes({ onRefresh }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    fetch('http://localhost:5175/notes')
      .then(response => response.json())
      .then((data: Note[]) => {
        onRefresh(data);
        setIsLoading(false);
      });
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Refresh Notes'}
    </button>
  );
}

export default RefreshNotes;
