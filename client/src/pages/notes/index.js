import React, { useEffect, useState } from 'react';
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import notesData from '../../data/notes.json';
import utils from '../../utils/localStorage';
import types from '../../config/types';

function Notes() {
  const [notesColl, setNotesColl] = useState([]);

  useEffect(() => {
    // Clear local storage to ensure new data is loaded
    utils.removeFromLocalStorage(types.NOTES_DATA);

    const data = utils.getFromLocalStorage(types.NOTES_DATA);
    if (data && data.length) {
      setNotesColl(data);
    } else {
      // To prevent an empty screen at first time
      utils.addToLocalStorage(types.NOTES_DATA, notesData);
      setNotesColl(notesData);
    }
  }, []);

  return (
    <section className={styles.container}>
      <Greeting />
      <main>
        {notesColl.map((note) => (
          <Note key={note.id} text={note.text} date={note.createdAt} color={note.color} />
        ))}
      </main>
    </section>
  );
}

export default Wrapper(Notes);
