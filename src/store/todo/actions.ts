import { createAction } from 'redux-actions';

import { ITodo as Todo } from './model';

import {
  ADD_TODO,
  COMPLETE_ALL,
  DELETE_TODO
} from './types';

const addTodo = createAction<Todo, string, number>(
  ADD_TODO,
  (text: string) => ({ completed: false, id: 0, text })
);

const deleteTodo = createAction<Todo, Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);
const completeAll = createAction<void>(
  COMPLETE_ALL,
  () => ({})
)


export {
  addTodo,
  deleteTodo,
  completeAll
}
