import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import noteShowcase from "../../db/notes";
import { genID, getDate, adjustElementHeight } from "../../lib/Helpers";
import NoteListing from "./NoteListing";
import NoteForm from "./NoteForm";
import EditIcon from "@material-ui/icons/Edit";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

const NoteContainer = () => {
  const [notes, setNotes] = useState(noteShowcase);
  const [isEditable, setIsEditable] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // ADD NOTE
  function addNote(title, content) {
    setIsAdded(true);
    setNotes((prevNotes) => {
      return [
        {
          id: genID(),
          title: title,
          text: content,
          date: getDate(),
        },
        ...prevNotes,
      ];
    });
  }

  // DELETE NOTE
  function deleteNote(id) {
    setIsAdded(false);
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  }

  //EDIT AND SAVE NOTE
  function toggleEditSave(toggles) {
    const [non, edit, icon] = toggles;
    non.current.className = non.current.className === "show" ? "hide" : "show";
    edit.current.className =
      edit.current.className === "hide" ? "show" : "hide";
    icon.current.innerHTML =
      icon.current.innerHTML === renderToString(<EditIcon />)
        ? renderToString(<PublishRoundedIcon />)
        : renderToString(<EditIcon />);
    icon.current.className =
      icon.current.className === "edit" ? "save" : "edit";
    setIsEditable(!isEditable ? true : false);
    for (let i = 0; i < 2; i++) {
      edit.current.children[i].focus();
      adjustElementHeight(edit.current.children[i]);
    }
  }

  function editNote(toggles) {
    toggleEditSave(toggles);
  }

  function saveNote(toggles, noteData) {
    toggleEditSave(toggles);
    const [title, content, id] = noteData;
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title: title,
            text: content,
          };
        } else return { ...note };
      });
    });
  }

  return (
    <>
      <NoteForm onAdd={addNote} />
      <NoteListing
        db={notes}
        onDelete={deleteNote}
        onEdit={editNote}
        onSave={saveNote}
        isEdit={isEditable}
        isAdded={isAdded}
      />
    </>
  );
};

export default NoteContainer;
