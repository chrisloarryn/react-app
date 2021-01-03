import {
  LOAD_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_NAME
} from '../actions/actionTypes';

function todosReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TODOS:
      return action.todos;

    case ADD_TODO:
      return [
        ...state,
        {
          ...action.todo
        }
      ];

    case TOGGLE_TODO:
      return state.map(
        (todo) =>
          todo._id === action._id ? { ...todo, done: !todo.done } : todo
      );

    case UPDATE_NAME:
      return state.map(
        (todo) =>
          todo._id === action._id ? { ...todo, name: todo.name } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action.index);

    default:
      return state;
  }
}

export default todosReducer;
