import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'TO-DO';
  todos = Array();
  filteredTodos = Array();
  completedTasks = Array();
  filteredCompletedTasks = Array();
  categories = Array();
  test = Array();
  selectedCategory = '';
  categoryClicked = false;
  constructor(private todoService: TodoService) { 
    this.todoService.readFromCategory();
    this.todoService.readFromTODO();
    this.todoService.readFromCompleted();

    this.todoService.todos$.subscribe(todos => this.todos = todos);
    this.todoService.completed$.subscribe(task => this.completedTasks = task);
    this.todoService.categories$.subscribe(categories=>this.categories = categories);
  }

  categorySelected(selectedCategory:string)
  {
    if(this.selectedCategory == selectedCategory)
    {
      this.categoryClicked = false;
      this.selectedCategory="";
    }
    else{
      this.categoryClicked = true;
      this.selectedCategory = selectedCategory;
    }

  }

  filteredList(componentList:any[],selectedCategory:string)
  {
    return componentList.filter(i=>i.category==selectedCategory);
  }

  ngOnInit(): void {
  }

}
