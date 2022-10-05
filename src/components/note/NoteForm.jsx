import React, { useRef, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function NoteForm(props) {
  const note = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;
    if (name === "title") setTitle(value);
    else setContent(value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setTitle("");
    setContent("");
    setIsFocused(false);
  }

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div>
      <form ref={note} className="create-note" onSubmit={handleOnSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleOnChange}
          className={isFocused ? "show" : "hide"}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isFocused ? "3" : "1"}
          value={content}
          onChange={handleOnChange}
          onFocus={onFocus}
        />
        <Zoom in={isFocused}>
          <Fab
            type="submit"
            onClick={() =>
              props.onAdd(note.current[0].value, note.current[1].value)
            }
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NoteForm;
