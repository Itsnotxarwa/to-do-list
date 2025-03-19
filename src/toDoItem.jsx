import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faSquare } from "@fortawesome/free-regular-svg-icons";

function ToDoItem(props) {
  function markDone() {
    props.onDelete(props.id);
  }

  const [isChecked, setIsChecked] = useState(false);

  function isCheckedHandle() {
    setIsChecked(!isChecked);
  }

  return (
    <li
    // style={isDone ? { textDecoration: "line-through" } : null}
    >
      <span className="task-text"> {props.text} </span>

      <div className="icons">
        <FontAwesomeIcon
          onClick={isCheckedHandle}
          icon={isChecked ? faSquareCheck : faSquare}
          className="icon"
        />
        <FontAwesomeIcon icon={faTrash} className="icon" onClick={markDone} />
      </div>
    </li>
  );
}

export default ToDoItem;