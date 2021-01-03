import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
  successMessage() {
    return (
      <Alert bsStyle='success' hidden>
        <strong>Welcome to the app!</strong> &nbsp;
        <Link to='/logout'>logout</Link>
      </Alert>
    );
  }

  render() {
    return (
      <div>
        <this.successMessage />
        <TodosContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
