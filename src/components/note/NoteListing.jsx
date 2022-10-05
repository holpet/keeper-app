import React from "react";
import Masonry from "react-masonry-css";
import Note from "./Note";
import SlideAnim from "../anim/SlideAnim";

const NoteListing = (props) => {
  const breakPts = {
    default: 7,
    2100: 6,
    1800: 5,
    1500: 4,
    1100: 3,
    840: 2,
    570: 1,
  };

  return (
    <Masonry
      breakpointCols={breakPts}
      className="note-container"
      columnClassName="note"
    >
      {props.db.map((note, i) => (
        <SlideAnim key={note.id} isAdded={props.isAdded} i={i} id={note.id}>
          <Note
            key={note.id}
            note={note}
            // functions
            onDelete={props.onDelete}
            onEdit={props.onEdit}
            onSave={props.onSave}
            isEdit={props.isEdit}
          />
        </SlideAnim>
      ))}
    </Masonry>
  );
};

export default NoteListing;
