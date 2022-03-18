import { Component, OnInit,AfterViewInit,OnChanges,Input, SimpleChanges, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.scss']
})
export class PendingTaskComponent implements OnInit,OnChanges,AfterViewInit {
  @Input() todos = Array();
  @Output() completedTask:any= new EventEmitter<any>();
  constructor() { }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }
  
addCompleted(completedTask:any){
  this.completedTask.emit(completedTask);
}

}
