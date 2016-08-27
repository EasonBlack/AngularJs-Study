import { combineReducers } from 'redux';
import { TodoReducer }  from './todo.reducer';

export const RootReducer = combineReducers({
    todos: TodoReducer
});