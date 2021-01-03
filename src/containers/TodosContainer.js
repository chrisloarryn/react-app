import React, { Component } from 'react';
import { axios } from './../axios/axios';
import { connect } from 'react-redux';
import {
  loadTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  changeName
} from '../actions/actionCreators';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';

class Todos extends Component {
  getTodos() {
    axios
      .get('/')
      .then((response) => {
        this.props.dispatch(loadTodos(response.data));
      })
      .catch((error) => console.log(error));
  }

  createTodo = async (name) => {
    if (!(name === '')) {
      await axios
        .post('/todo', { name, done: false, createdAt: new Date() })
        .then(async (response) => {
          response.data &&
            this.props.dispatch(
              await addTodo(response.data._id, { ...response.data })
            );
        })
        .catch((error) => console.log(error));
    }
  };

  updateTodo = async (params) => {
    const [currentTask] = this.props.todos.filter(
      (todo) => todo._id === params._id
    );
    // return console.log({ ...currentTask, done: params.done });
    axios
      .put(`/todo/${params._id}`, { ...currentTask, done: params.done })
      .then((response) => {
        this.props.dispatch(toggleTodo(params._id));
      })
      .catch((error) => console.log(error));
  };

  updateTodoName = async (params) => {
    const [currentTask] = this.props.todos.filter(
      (todo) => todo._id === params._id
    );
    // return console.log({ ...currentTask, done: params.done });
    axios
      .put(`/todo/${params._id}`, { ...currentTask, name: params.name })
      .then((response) => {
        this.props.dispatch(changeName(params._id, { ...response.data }));
      })
      .catch((error) => console.log(error));
  };

  deleteTodo = (_id) => {
    axios
      .delete(`/todo/${_id}`)
      .then((response) => {
        this.props.dispatch(deleteTodo(_id));
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div className='container'>
        <InputBox createTodo={this.createTodo} />
        <TodoList
          todos={this.props.todos}
          updateTodo={this.updateTodo}
          updateTodoName={this.updateTodoName}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todos);
