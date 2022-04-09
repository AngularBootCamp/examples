import { OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { HomeTaskState, homeTasksReceived } from './home-tasks.state';

const initialHomeTasks: HomeTaskState = {
  doneHome: [
    'cook dinner',
    'go grocery shopping',
    'sweep the floors',
    'do the laundry'
  ],
  todoHome: ['fix the leaky faucet', 'mow the lawn']
};

export class HomeTasksEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return homeTasksReceived({ tasks: initialHomeTasks });
  }
}
