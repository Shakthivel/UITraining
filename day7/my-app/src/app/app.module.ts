import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { PendingTaskComponent } from './pending-task/pending-task.component';
import { TaskCardComponent } from './task-card/task-card.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    CompletedTaskComponent,
    PendingTaskComponent,
    TaskCardComponent,
    CategoryComponentComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
