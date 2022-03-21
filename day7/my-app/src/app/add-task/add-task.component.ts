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
      category:category.toLowerCase(),
      cardColor:this.getRandomColor(),
      date:new Date(),
      isCompleted:false,
    }
    this.todoService.addToTODO(task);
    this.todoService.addToCollection(`categoryList/${task.category}`,{category:task.category});
  }

 getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
