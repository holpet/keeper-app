import React, { useState, useRef } from "react";
import { adjustElementHeight } from "../../lib/Helpers";
import Noneditable from "./partials/Noneditable";
import Editable from "./partials/Editable";
import Date from "./partials/Date";
import Delete from "./partials/Delete";
import ToggleIcon from "./partials/ToggleIcon";

const Note = (props) => {
  const note = props.note;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.text);
  const noneditable = useRef(null);
  const editable = useRef(null);
  const toggleIcon = useRef(null);
  const refs = [noneditable, editable, toggleIcon];

  function handleOnChange(event) {
    const { name, value } = event.target;
    if (name === "title") setTitle(value);
    else setContent(value);
    adjustElementHeight(event.target);
  }

  return (
    <div>
      <div ref={noneditable} className="show">
        <Noneditable title={note.title} content={note.text} />
      </div>

      <div ref={editable} className="hide">
        <Editable title={title} content={content} handler={handleOnChange} />
      </div>

      <div className="note-footer">
        <Date date={note.date} />
        <div>
          <ToggleIcon
            refs={refs}
            note={[title, content, note.id]}
            isEdit={props.isEdit}
            onEdit={props.onEdit}
            onSave={props.onSave}
          />
          <Delete id={note.id} onDelete={props.onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Note;
