import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import todos from "../redux/States";

function Header(todo) {
  let [description, setDescription] = useState();
  let dispatch = useDispatch();
  return (
    <div>
       <h2>My To Do List </h2>
        <p>todos : {todos.length}</p>
        <div className="header">
        <input
          placeholder="add new task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            dispatch(addTodo(description));
            setDescription("");
          }}
          className="btn btn-default"
        >
         <i class="fas fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default Header;