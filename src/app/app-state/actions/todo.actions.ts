import { createAction, props } from '@ngrx/store';
import { Task } from '../entity';

export const GET_TASKS = '[Task] Get Tasks';
export const GET_TASKS_SUCCESS = '[Task] Get Tasks Success';
export const GET_TASKS_FAILURE = '[Task] Get Tasks Failure';

export const CREATE_TASK = '[Task] Create Task';
export const CREATE_TASK_SUCCESS = '[Task] Create Task Success';
export const CREATE_TASK_FAILURE = '[Task] Create Task Failure';

export const GET_TASKS_BY_ID = '[Task] Get Tasks';
export const GET_TASKS_BY_ID_SUCCESS = '[Task] Get Tasks Success';
export const GET_TASKS_BY_ID_FAILURE = '[Task] Get Tasks Failure';


export const EDIT_TASK = '[Task] Edit Task';
export const EDIT_TASK_SUCCESS = '[Task] Edit Task Success';
export const EDIT_TASK_FAILURE = '[Task] Edit Task Failure';



export const GET_USERS = '[Users] Get Users';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';
export const GET_USERS_FAILURE = '[Users] Get Users Failure';


export const getTasks = createAction(
  GET_TASKS
);

export const getTasksSuccess = createAction(
  GET_TASKS_SUCCESS,
  props<any>()
);

export const getTasksFailure = createAction(
  GET_TASKS_FAILURE,
  props<{any}>()
);

export const createTask = createAction(
  CREATE_TASK,
  props<{task: any}>()
);

export const createTaskSuccess = createAction(
  CREATE_TASK_SUCCESS,
  props<any>()
);

export const createTaskFailure = createAction(
  CREATE_TASK_FAILURE,
  props<{any}>()
);
 
export const getTaskById = createAction(
  GET_TASKS_BY_ID,
  props<{id}>()
);

export const getTaskByIdSuccess = createAction(
  GET_TASKS_BY_ID_SUCCESS,
  props<any>()
);

export const getTaskByIdFailure = createAction(
  GET_TASKS_BY_ID_FAILURE,
  props<{any}>()
);

export const editTask = createAction(
  EDIT_TASK,
  props<{id:any,task: any}>()
);

export const editTaskSuccess = createAction(
  EDIT_TASK_SUCCESS,
  props<any>()
);

export const editTaskFailure = createAction(
  EDIT_TASK_FAILURE,
  props<{any}>()
);


export const getUsers = createAction(
  GET_TASKS
);

export const getUsersSuccess = createAction(
  GET_TASKS_SUCCESS,
  props<any>()
);

export const getUsersFailure = createAction(
  GET_TASKS_FAILURE,
  props<{any}>()
);