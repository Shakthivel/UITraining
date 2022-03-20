import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() todoList = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {

   }

  ngOnInit(): void {
  }

  addToTODO(desc:string,category:string){
    var task = {
      desc:desc,
      category:category,
    }
    this.todoService.addToTODO(task).then(res=>{
      console.log(res);
    });
  }
}
