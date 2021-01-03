import * as actions from '../actions/actionTypes';

export function loadTodos(todos) {
  return { type: actions.LOAD_TODOS, todos: todos };
}

export function addTodo(_id, todo) {
  return { type: actions.ADD_TODO, todo };
}

export function toggleTodo(_id) {
  return { type: actions.TOGGLE_TODO, _id: _id };
}

export function changeName(_id, todo) {
  return { type: actions.UPDATE_NAME, todo };
}

export function deleteTodo(index) {
  return { type: actions.DELETE_TODO, index: index };
}

//////////////////////////////////////
