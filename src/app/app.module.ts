import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app-state';
import { TodoEffects } from './app-state/effects';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent
  },
  {
    path: 'task/:id',
    component: AddTaskComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
