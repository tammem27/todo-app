import React, { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/Actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const EditTask = ({oldTask}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newAction, setNewAction] = useState(oldTask.action);
  const dispatch = useDispatch();

  const handleSubmit = (e)=> {
      e.preventDefault();
      const editedTask={...oldTask,action:newAction};
      dispatch(editTask(editedTask)) ;
      closeModal();
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit} >
          <input className="inp"
            type="text"
            value={newAction}
            onChange={(e) => setNewAction(e.target.value)}
          />
          <button type="submit">confirm</button>
          <button  className="todo-button" onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
