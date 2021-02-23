import {DELTODO, ADDTODO} from './action-types';

export const addTodo = (todo) => {
  type: ADDTODO;
  todo;
};
export const delTodo = (index) => {
  type: DELTODO;
  index;
};
