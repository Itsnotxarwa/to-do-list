import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck, faSquare } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";


function ToDoItem(props) {
  function markDone() {
    props.onDelete(props.id);
  }

  const [isChecked, setIsChecked] = useState(false);

  function isCheckedHandle() {
    setIsChecked(!isChecked);
  }

  const [isEditing, setEditing] = useState(true)
  const textEdit = () => setEditing(!isEditing);

  const [inputText, setInputText] = useState(props.text)
  const [newText, setNewText] = useState(inputText)
  
  const handleChange = (e) => setNewText(e.target.value)
  
  const handleSave = () => {
    setInputText(newText);
    setEditing(!isEditing);
  };

  return (
    <li>
      { isEditing ? ( <> 
      
      <span className="task-text"> {inputText} </span>

      <div className="icons">
        <FontAwesomeIcon
          onClick={isCheckedHandle}
          icon={isChecked ? faSquareCheck : faSquare}
          className="icon"
        />
        <FontAwesomeIcon icon={faTrash} className="icon" onClick={markDone} />
        <FontAwesomeIcon icon={faPenToSquare} className="icon" onClick={textEdit} />
        </div> 

        </>

        ) : (<>
        <input type="text" value={newText} onChange={handleChange}></input>
        <FontAwesomeIcon icon={faFloppyDisk} className="icon" onClick={handleSave} />
        </>) }

    </li>
  );
}

export default ToDoItem;