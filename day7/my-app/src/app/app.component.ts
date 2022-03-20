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
  test = Array();

  constructor(private todoService: TodoService) {
    this.todoService.readCollectionLists("completedList").subscribe(res=> this.completedTasks=res);
    this.todoService.readCollectionLists("todoList").subscribe(res=> this.todos=res);
   }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }

  openDialog(){
    console.log("button clicked");
  }
}
