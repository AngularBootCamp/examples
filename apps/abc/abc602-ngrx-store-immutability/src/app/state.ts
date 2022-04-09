import { createAction } from '@ngrx/store';

import { HomeTaskState } from './home-task.state';
import { WorkTaskState } from './work-task.state';

export const completeAll = createAction('COMPLETE_ALL');

export interface AppState {
  worktasks: WorkTaskState;
  hometasks: HomeTaskState;
}
