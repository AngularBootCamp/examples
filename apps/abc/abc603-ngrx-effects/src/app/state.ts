import { createAction } from '@ngrx/store';

import { HomeTaskState } from './home-tasks.state';
import { WorkTaskState } from './work-tasks.state';

export const completeAll = createAction('COMPLETE_ALL');

export const completeAllSuccess = createAction(
  'COMPLETE_ALL_SUCCESS'
);

export interface AppState {
  worktasks: WorkTaskState;
  hometasks: HomeTaskState;
}
