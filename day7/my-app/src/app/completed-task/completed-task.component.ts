import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  @Input() completedTasks= Array();
  @Output() pendingTask:any= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  addToPending(completedTask:any){
    this.pendingTask.emit(completedTask);
  }
}
