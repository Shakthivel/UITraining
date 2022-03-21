import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { PendingTaskComponent } from './pending-task/pending-task.component';
import { TaskCardComponent } from './task-card/task-card.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponentComponent } from './category-component/category-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    CompletedTaskComponent,
    PendingTaskComponent,
    TaskCardComponent,
    CategoryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
