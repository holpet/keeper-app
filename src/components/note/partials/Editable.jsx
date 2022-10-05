import React from "react";

const Editable = ({ title, content, handler }) => {
  return (
    <>
      <textarea
        name="title"
        className="note-title"
        placeholder="Title"
        value={title}
        rows="1"
        onChange={handler}
        spellCheck="false"
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="1"
        value={content}
        onChange={handler}
        spellCheck="false"
      />
    </>
  );
};

export default Editable;
