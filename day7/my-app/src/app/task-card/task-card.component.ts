import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:any;
  constructor(private todoService: TodoService) { }



  ngOnInit(): void {
  }

  addToCompleted(seletedTask:any){   
    this.todoService.addToCompleted(seletedTask);
  }

  removeFromCompleted(selectedTask:any)
  {
      this.todoService.removeFromCompleted(selectedTask);
  }


}
