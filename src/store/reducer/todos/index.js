import {ADDTODO, DELTODO} from './action-types';
const addTodo = (todos, todo) => {
  const temp = [...todos];
  temp.push(todo);
  return temp;
};
const delTodo = (todos, index) => {
  const temp = [...todos];
  temp.splice(index, 1);
  return temp;
};
export const todos = (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return addTodo(state, action.todo);
    case DELTODO:
      return delTodo(state, action.index);
    default:
      return state;
  }
};
