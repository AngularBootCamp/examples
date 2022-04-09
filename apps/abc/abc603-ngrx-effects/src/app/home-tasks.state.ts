import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';

import { completeAllSuccess } from './state';

export const setHomeTask = createAction(
  'SET_HOME_TASK',
  props<{ task: string; complete: boolean }>()
);

export const homeTasksReceived = createAction(
  'HOME_TASKS_RECEIVED',
  props<{ tasks: HomeTaskState }>()
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
    setHomeTaskStatus(state, action.task, action.complete)
  ),
  on(completeAllSuccess, state => ({
    doneHome: [...state.doneHome, ...state.todoHome],
    todoHome: []
  })),
  on(homeTasksReceived, (_state, action) => action.tasks)
);

function setHomeTaskStatus(
  currentState: HomeTaskState,
  task: string,
  complete: boolean
): HomeTaskState {
  const todoHome = currentState.todoHome.filter(x => x !== task);
  const doneHome = currentState.doneHome.filter(x => x !== task);
  if (complete) {
    todoHome.push(task);
  } else {
    doneHome.push(task);
  }
  return { todoHome, doneHome };
}

// createSelector will memorize (cache) the result, meaning it will
// give the same object until the state changes
const getHomeTaskState =
  createFeatureSelector<HomeTaskState>('hometasks');

export const getTodoHome = createSelector(
  getHomeTaskState,
  state => state.todoHome
);

export const getDoneHome = createSelector(
  getHomeTaskState,
  state => state.doneHome
);
