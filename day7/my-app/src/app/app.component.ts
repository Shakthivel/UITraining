import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges{

  title = 'TO-DO';
  todos = Array();
  completedTasks = Array();

  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
    this.todoService.completed$.subscribe(completed=>this.completedTasks=completed);

    console.log(this.completedTasks);
    console.log(this.todos);
   }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }

  openDialog(){
    console.log("button clicked");
  }
}
