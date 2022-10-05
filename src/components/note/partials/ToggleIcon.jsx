import React from "react";
import EditIcon from "@material-ui/icons/Edit";

const ToggleIcon = ({ refs, note, isEdit, onEdit, onSave }) => {
  const [, , refIcon] = refs;
  return (
    <button>
      <span
        ref={refIcon}
        className="edit"
        onClick={!isEdit ? () => onEdit(refs) : () => onSave(refs, note)}
      >
        <EditIcon />
      </span>
    </button>
  );
};

export default ToggleIcon;
