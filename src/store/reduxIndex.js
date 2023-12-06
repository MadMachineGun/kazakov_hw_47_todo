import {configureStore} from '@reduxjs/toolkit';

import todoReducer from './slices/TodoSlice';
import useReducer from './slices/UserSlice';


export default configureStore({
    reducer: {
        todos: todoReducer,
        user: useReducer,
    }
});
