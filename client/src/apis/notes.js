// GET /notes
export const getNotes = async () => {
  const response = await fetch('/api/notes');
  const data = await response.json();
  return data;
};

// POST /notes
export const addNote = async (note) => {
  const response = await fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();
  return data;
};

// PUT /notes/:id
export const updateNote = async (id, note) => {
  const response = await fetch(`/api/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();
  return data;
};

// DELETE /notes/:id
export const deleteNote = async (id) => {
  const response = await fetch(`/api/notes/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};




