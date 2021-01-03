import Axios from 'axios';

// const { env: { REACT_APP_BASE_URL } } = process

export const axios = Axios.create({
  baseURL: 'https://todo-app-spring-api.herokuapp.com/api/todos'
});
