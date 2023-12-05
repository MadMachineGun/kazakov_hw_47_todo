// src/components/ToDo/Todo.js

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, selectAllTodos } from '../../store/slices/todoSlice';


const Todo = ({ todo, isSelected, toggleSelected }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(isSelected);

  useEffect(() => {
    setIsChecked(isSelected);
  }, [isSelected]);

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removeTodo(todo.id));
    toggleSelected();
    dispatch(selectAllTodos());
  };

  const toggleSelectedTodo = () => {
    toggleSelected();
    setIsChecked((prev) => !prev);
    dispatch(selectAllTodos());
  };

  console.log('Todo.js - todo:', todo);
  console.log('Todo.js - isChecked:', isChecked);

  return (
      <li
          style={{
            textDecoration: isChecked ? 'line-through' : 'none',
            marginBottom: '10px',
          }}
      >
        <input
            type='checkbox'
            checked={isChecked}
            onChange={toggleSelectedTodo}
        />
        {todo.title} {/* Используйте todo.title */}
        <button onClick={handleRemove}>Delete</button>
      </li>
  );
};

export default Todo;
