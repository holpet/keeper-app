import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Delete = ({ id, onDelete }) => {
  return (
    <button>
      <span className="delete" onClick={() => onDelete(id)}>
        <DeleteForeverIcon />
      </span>
    </button>
  );
};

export default Delete;
