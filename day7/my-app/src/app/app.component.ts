import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges{



  constructor() {
    
    
   }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }



}
