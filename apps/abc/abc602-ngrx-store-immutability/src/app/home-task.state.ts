import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';

import { completeAll } from './state';

export const setHomeTask = createAction(
  'SET_HOME_TASK',
  props<{ hometask: string; complete: boolean }>()
);

export const homeTasksReceived = createAction(
  'HOME_TASKS_RECEIVED',
  props<{ hometasks: HomeTaskState }>()
);

const defaultHomeTaskState: HomeTaskState = {
  todoHome: [],
  doneHome: []
};

export interface HomeTaskState {
  todoHome: string[];
  doneHome: string[];
}

export const homeTaskReducer = createReducer(
  defaultHomeTaskState,
  on(setHomeTask, (state, action) =>
    setHomeTaskStatus(state, action.hometask, action.complete)
  ),
  on(completeAll, state => ({
    doneHome: [...state.doneHome, ...state.todoHome],
    todoHome: []
  })),
  on(homeTasksReceived, (_state, action) => action.hometasks)
);

function setHomeTaskStatus(
  currentState: HomeTaskState,
  task: string,
  complete: boolean
): HomeTaskState {
  const doneHome = currentState.doneHome.filter(x => x !== task);
  const todoHome = currentState.todoHome.filter(x => x !== task);
  if (complete) {
    todoHome.push(task);
  } else {
    doneHome.push(task);
  }
  return { todoHome, doneHome };
}

// defensive copy of the data coming out of the store
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getHomeTaskState =
  createFeatureSelector<HomeTaskState>('hometasks');

export const getTodoHome = createSelector(getHomeTaskState, state => [
  ...state.todoHome
]);

export const getDoneHome = createSelector(getHomeTaskState, state => [
  ...state.doneHome
]);
