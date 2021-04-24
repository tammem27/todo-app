import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Actions";

const AddTask = ({handleFilter,filter}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch() ;
  const handleAdd = ()=> {
    text.trim()
        ? dispatch(addTask({id:Math.random,action:text,isDone :false}))
        : alert ("please fill the input");
    setText("");
  };
  return (
    <div className="form">
      <input className="todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="todo-button" onClick={handleAdd} >Add</button>
      <button className="todo-button" onClick={handleFilter} >{filter? "filter" : "all"}</button>
    </div>
  );
};

export default AddTask;
