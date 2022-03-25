import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/backend.service';
import * as todoActions from '../actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) { }

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getTasks),
      exhaustMap(action =>
        this.backendService.tasks().pipe(
          map(response => {
            console.log("response:::", response)
            return todoActions.getTasksSuccess({ response })
          }),
          catchError((error: any) => of(todoActions.getTasksFailure(error))))
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.createTask),
      exhaustMap(action =>
        this.backendService.newTask(action.task).pipe(
          map(response => todoActions.createTaskSuccess(response)),
          catchError((error: any) => of(todoActions.createTaskFailure(error))))
      )
    )
  );


  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.editTask),
      exhaustMap(action =>
        this.backendService.update(action.id, action.task).pipe(
          map(response => todoActions.editTaskSuccess(response)),
          catchError((error: any) => of(todoActions.editTaskFailure(error))))
      )
    )
  );


  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getTasks),
      exhaustMap(action =>
        this.backendService.users().pipe(
          map(response => {
            console.log("response:::", response)
            return todoActions.getTasksSuccess({ response })
          }),
          catchError((error: any) => of(todoActions.getTasksFailure(error))))
      )
    )
  );

}
