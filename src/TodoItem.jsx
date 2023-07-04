import React from "react";
import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Border from "./Border";
import Delete from "./images/delete.png";
import Edit from "./images/tool.png";

function TodoItem({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  if (!todos) {
    return <div>error</div>;
  }

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Border>
      <span key={todo.id} className={todo.isComplete ? "checked" : "unchecked"}>
        {todo.description} {todo.deadline_time}
      </span>
      <span className="actions">
        <input
          type="checkbox"
          className="checkbox"
          key={index}
          onChange={() => completeTodo(todo.id)}
        />

        <button
          className="itemButtons"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <img alt="edit" src={Edit} />
        </button>

        <button className="itemButtons" onClick={() => removeTodo(todo.id)}>
          <img alt="delete" src={Delete} />
        </button>
      </span>
    </Border>
  ));
}

export default TodoItem;
