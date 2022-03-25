import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';
import * as fromTodo from './reducers/todo.reducer';

export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};

const reducerKeys = ['user', 'todo'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];




// Todo reducers Begin

export const geTodoState = createFeatureSelector<fromTodo.State>('todo');

export const getTasks = createSelector(
  geTodoState,
  fromTodo.getTasks
);
