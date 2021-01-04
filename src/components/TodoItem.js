import React, { Component } from 'react';

class TodoItem extends Component {
  updateTodo = (e, _id) => {
    this.props.updateTodo({ _id: _id, done: e.target.checked });
  };

  updateTodoName = (e, _id) => {
    if (!e.key === 'Enter') return console.log('press enter');
    if (e.key === 'Enter')
      this.props.updateTodoName({ _id: _id, name: e.target.value });
  };

  deleteTodo = (_id) => {
    this.props.deleteTodo(_id);
  };

  render() {
    const todo = this.props.todo;
    return (
      <li className="task" key={todo.id} id={todo._id}>
        <input
          className="taskCheckbox"
          type="checkbox"
          name="checked"
          contentEditable
          readOnly={false}
          checked={todo.done}
          onChange={(e) => this.updateTodo(e, todo._id)}
        />
        <input
          className={todo.done ? 'taskLabel pointer' : 'taskLabel'}
          key={todo._id}
          type="text"
          name="name"
          disabled={todo.done}
          defaultValue={todo.name}
          onKeyPress={(e) => this.updateTodoName(e, todo._id)}
        />

        <span
          className="deleteTaskBtn"
          onClick={(e) => this.deleteTodo(todo._id)}
        >
          x
        </span>
      </li>
    );
  }
}

export default TodoItem;
