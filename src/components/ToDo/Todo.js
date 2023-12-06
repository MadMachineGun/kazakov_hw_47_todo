// // src/components/ToDo/Todo.js
//
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { removeTodo, selectAllTodos } from '../../store/slices/todoSlice';
//
// import { FaTrash } from 'react-icons/fa';
//
// const Todo = ({ todo, isSelected, toggleSelected }) => {
//   const dispatch = useDispatch();
//   const [isChecked, setIsChecked] = useState(isSelected);
//
//   useEffect(() => {
//     setIsChecked(isSelected);
//   }, [isSelected]);
//
//   const handleRemove = (e) => {
//     e.stopPropagation();
//     dispatch(removeTodo(todo.id));
//     toggleSelected();
//     dispatch(selectAllTodos());
//   };
//
//   const toggleSelectedTodo = () => {
//     toggleSelected();
//     setIsChecked((prev) => !prev);
//     dispatch(selectAllTodos());
//   };
//
//     return (
//         <li
//             style={{
//                 textDecoration: isChecked ? 'line-through' : 'none',
//                 marginBottom: '10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//             }}
//         >
//             <div>
//                 <input
//                     type='checkbox'
//                     checked={isChecked}
//                     onChange={toggleSelectedTodo}
//                 />
//                 {todo.title}
//             </div>
//             <button className="delete-btn" onClick={handleRemove}>
//                 <FaTrash />
//             </button>
//         </li>
//     );
// };
//
// export default Todo;

import { useDispatch } from 'react-redux';

import { removeTodo, selectTodo, toggleTodo } from '../../store/slices/TodoSlice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        e.stopPropagation();
        dispatch(removeTodo(todo.id));
    };

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleSelect = () => {
        dispatch(selectTodo(todo.id));
    };

    return (
        <li>
            <input
                type='checkbox'
                checked={todo.selected}
                onChange={handleSelect}
            />
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginBottom: '10px',
                }}
                onClick={handleToggle}
            >
          {todo.title || todo.text}
        </span>

            <button onClick={handleRemove}>Delete</button>
        </li>
    );
};

export default Todo;

