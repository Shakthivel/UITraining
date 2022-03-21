import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit {

  constructor() { }

  @Input() category = Array();
  @Output() selectedCategory = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  selectCategory(selectedCategory:string)
  {
    this.selectedCategory.emit(selectedCategory);
  }

}
