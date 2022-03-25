import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as todoActions from '../app-state/actions';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  todoForm: FormGroup
  title: string;
  assignee: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  id: any;
  val: any;

  constructor(
    private _fb: FormBuilder,
    private readonly store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if (this.id == 0) {
      this.title = 'Add Task'
    } else {
      this.title = 'Edit Task'
    }
    this.createTaskForm();
    this.getUsers();
    this.editForm();
  }

  createTaskForm() {
    this.todoForm = this._fb.group({
      id: ['',],
      description: ['',],
      assigneeId: [null,],
      completed: ['']
    })
  }

  back() {
    this.location.back()
  }

  editForm() {
    let data = JSON.parse(localStorage.getItem('todo'))
    const value = data['tasks']
    for (var i = 0; i < value.length; i++) {
      if (value[i].id === this.id) {
        this.val = value[i];
      }
    }
    this.todoForm.patchValue({
      id: this.val.id,
      description: this.val.description,
      assigneeId: this.val.assigneeId,
      completed: this.val.completed
    })
  }

  submit() {
    if (this.id == 0) {
      this.todoForm.value.id = uuidv4();
      const task = this.todoForm.value
      console.log(task);
      this.store.dispatch(todoActions.createTask({ task }));
      this.router.navigate(['/'])
    } else {
      let id = this.id
      const task = this.todoForm.value
      this.store.dispatch(todoActions.editTask({ id, task }));
      this.router.navigate(['/'])
    }
  }

  getUsers() {
    this.backendService.users().subscribe((res: any) => {
      this.assignee = res
      console.log(this.assignee);

    })
  }

  status: any = [
    true, false
  ]

}
