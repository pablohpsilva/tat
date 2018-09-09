import { Action, handleActions } from 'redux-actions'

import { IState, ITodo as Todo } from './model';
import {
  ADD_TODO,
  COMPLETE_ALL,
  DELETE_TODO
} from './types';

const initialState: IState = [<Todo>{
  completed: false,
  id: 0,
  text: 'Use Redux with TypeScript'
}];

export default handleActions<IState, Todo>({
  [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
    return [{
      completed: action.payload ? action.payload.completed : false,
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload ? action.payload.text : '-'
    }, ...state];
  },

  [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
    return state.filter(todo =>
      todo.id !== (action.payload ? action.payload.id : -1)
    );
  },

  [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
    const areAllMarked = state.every(todo => todo.completed);
    return <IState>state.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }));
  },
}, initialState);
