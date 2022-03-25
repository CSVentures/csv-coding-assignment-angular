import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  displayedColumns: string[] = ['id', 'description', 'assigneeId', 'completed', 'action'];
  constructor(
    private readonly store: Store,
    private router: Router
  ) {
    this.store.select(fromRoot.getTasks).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.tasks = data.tasks);
  }

  ngOnInit(): void {
  }

  destroy$: Subject<boolean> = new Subject<boolean>();


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addTask() {
    this.router.navigate([`/task/0`])
  }

  editTask(id) {
    this.router.navigate([`/task/${id}`])
  }
}
