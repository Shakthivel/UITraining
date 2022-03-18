import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Todo{
  desc:string
  isCompleted:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos  = new Subject<Todo[]>();
  readonly todos$ = this._todos.asObservable();
  todos: any[]=[];

  private _completed  = new Subject<Todo[]>();
  readonly completed$ = this._completed.asObservable();
  completed: any[]=[];
  constructor() { }

  addToTODO(task:any){
    var todo = {
      desc:task["desc"],
      category:task["category"],
      isCompleted:false,
      date:new Date()
    }
    this.todos.push(todo);
    console.log(this.todos);
    this._todos.next(this.todos);
    return this.todos;
  }

  addToCompleted(task:any)
  {
    this.todos = this.todos.filter(i=>i["desc"]!=task["desc"]);
    task["isCompleted"] = !task["isCompleted"];
    this.completed.push(task);
    this._todos.next(this.todos);
    this._completed.next(this.completed);
  }

  removeFromCompleted(task:any)
  {
    this.completed = this.completed.filter(i=>i["desc"]!=task["desc"]);
    this._completed.next(this.completed);
  }
}
