// src/components/ToDo/Todo.js

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, selectAllTodos } from '../../store/slices/todoSlice';

import { FaTrash } from 'react-icons/fa';

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

    return (
        <li
            style={{
                textDecoration: isChecked ? 'line-through' : 'none',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={toggleSelectedTodo}
                />
                {todo.title}
            </div>
            <button className="delete-btn" onClick={handleRemove}>
                <FaTrash />
            </button>
        </li>
    );
};

export default Todo;