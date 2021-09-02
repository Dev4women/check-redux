import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setDone, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState(todo.description);
  const [checked, setChecked] = useState(todo.isDone);
  let dispatch = useDispatch();

  return (
    <div>
      <div id="items" style={{ marginBottom: "1rem" }}>
        {editable ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(
                updateTodo({
                  id: todo.id,
                  description
                })
              );

              setEditable(false);
            }}
          >
            <input
              className="li"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button type="submit"><i className="fas fa-save"></i></button>
          </form>
        ) : (
          <div className="li">
            <input
              type="checkbox"
              name="isDone"
              checked={checked}
              onChange={() => {
                dispatch(setDone(todo.id));
                setChecked(!checked);
              }}
            />
            <label>{description}</label>
            <button
              className="btn"
              onClick={() => {
                setEditable(true);
              }}
            >
            <i className="fas fa-edit"></i>
            </button>
            <button
              className="btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoItem;