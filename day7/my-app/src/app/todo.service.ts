import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

export interface Todo{
  desc:string
  isCompleted:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  user:any;

  private _loginFlag  = new Subject<boolean>();
  readonly loginFlag$ = this._loginFlag.asObservable();
  loginFlag: boolean=false;

  private _todos  = new Subject<Todo[]>();
  readonly todos$ = this._todos.asObservable();
  todos: any[]=[];

  _base_url = "https://todolistangular-d628f-default-rtdb.firebaseio.com/";
  _firebase_url = this._base_url;

  private _completed  = new Subject<Todo[]>();
  readonly completed$ = this._completed.asObservable();
  completed: any[]=[];

  private _categories  = new Subject<Todo[]>();
  readonly categories$ = this._categories.asObservable();
  categories: any[]=[];

  constructor(private http: HttpClient) { }

  addToTODO(task:any){
    return this.addToCollection("todoList",task);
  }

  addToCompleted(taskId:string,task:any)
  {
    this.removeFromCollection("todoList",taskId);
    task["isCompleted"] = !task["isCompleted"];
    return this.addToCollection("completedList",task);

  }

  addToCollection(collectionName:string,task:any)
  {
    this.http.post(`${this._base_url+collectionName}.json`,task).subscribe((res)=>{
      this.user = res;
      this.readFromCompleted();
      this.readFromTODO();
      this.readFromCategory();
    });
  }

  register(user:any)
  {
    this.http.post(`${this._base_url}.json`,user).subscribe((res)=>{
      this.user = res;
      this._base_url += this.user.name+"/";
    });
  }

  login(user:any){
    console.log(user);
    return this.http.get(`${this._firebase_url}.json`).subscribe((data:any)=>{
      this.loginFlag = false;
      if(data)
      {
        this.categories= Object.keys(data).map((key: any) => {
          if(data[key].email == user.email && data[key].password == user.password)
          {
            this.loginFlag = true;
            this._base_url += key+"/";
            return data[key];
          }
        });
      }
      this._loginFlag.next(this.loginFlag);
    });
  }

  removeFromCollection(collectionName:string,taskId:string)
  {
    this.http.delete(`${this._base_url+collectionName}/${taskId}.json`).subscribe(res=>{
      this.readFromCompleted();
      this.readFromTODO();
    })
  }

  readFromTODO() {
    this.http.get(`${this._base_url}todoList.json`).subscribe((data:any)=>{
      this.todos = [];
      if(data)
      {
        this.todos= Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.todos=data[key];
          return data[key];
        });
      }
      this._todos.next(this.todos);
    });
  }

  readFromCompleted()
  {
    this.http.get(`${this._base_url}completedList.json`).subscribe((data:any)=>{
      this.completed = [];
      if(data)
      {
        this.completed = Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.completed=data[key];
          return data[key];
        });
      }
      this._completed.next(this.completed);
    });
  }

  readFromCategory(){
    this.http.get(`${this._base_url}categoryList.json`).subscribe((data:any)=>{
      this.categories = [];
      if(data)
      {
        this.categories= Object.keys(data).map((key: any) => {
          data[key].id = key;
          this.categories=data[key];
          return data[key];
        });
      }

      this._categories.next(this.categories);
    });
  }

}
