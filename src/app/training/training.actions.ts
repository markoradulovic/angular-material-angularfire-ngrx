import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAIBLE_TRAININGS = '[Training] Set Avaible Trainings';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvaibleTrainings implements Action {
  readonly type = SET_AVAIBLE_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: string) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  | SetAvaibleTrainings
  | SetFinishedTrainings
  | StartTraining
  | StopTraining;
