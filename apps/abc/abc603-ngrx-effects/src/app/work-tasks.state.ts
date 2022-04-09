import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props
} from '@ngrx/store';

import { completeAllSuccess } from './state';

export const setWorkTask = createAction(
  'SET_WORK_TASK',
  props<{ task: string; complete: boolean }>()
);

export const workTasksReceived = createAction(
  'WORK_TASKS_RECEIVED',
  props<{ tasks: WorkTaskState }>()
);

export interface WorkTaskState {
  todoWork: string[];
  doneWork: string[];
}

const defaultWorkTaskState: WorkTaskState = {
  todoWork: [],
  doneWork: []
};

export const workTaskReducer = createReducer(
  defaultWorkTaskState,
  on(setWorkTask, (state, action) =>
    setWorkTaskStatus(state, action.task, action.complete)
  ),
  on(completeAllSuccess, state => ({
    doneWork: [...state.doneWork, ...state.todoWork],
    todoWork: []
  })),
  on(workTasksReceived, (_state, action) => action.tasks)
);

function setWorkTaskStatus(
  currentState: WorkTaskState,
  task: string,
  complete: boolean
): WorkTaskState {
  const todoWork = currentState.todoWork.filter(x => x !== task);
  const doneWork = currentState.doneWork.filter(x => x !== task);
  if (complete) {
    todoWork.push(task);
  } else {
    doneWork.push(task);
  }
  return { todoWork, doneWork };
}

// defensive copy of the data coming out of the store
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
const getWorkTaskState =
  createFeatureSelector<WorkTaskState>('worktasks');

export const getTodoWork = createSelector(getWorkTaskState, state => [
  ...state.todoWork
]);

export const getDoneWork = createSelector(getWorkTaskState, state => [
  ...state.doneWork
]);
