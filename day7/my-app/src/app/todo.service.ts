import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

export interface Todo{
  desc:string
  isCompleted:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos  = new Subject<Todo[]>();
  readonly todos$ = this._todos.asObservable();
  todos: any[]=[];

  private _completed  = new Subject<Todo[]>();
  readonly completed$ = this._completed.asObservable();
  completed: any[]=[];
  constructor(private firestore: AngularFirestore) { }

  addToTODO(task:any){
    var todo = {
      desc:task["desc"],
      category:task["category"],
      isCompleted:false,
      date:new Date()
    }
    return this.addToCollection("todoList",task);
  }

  addToCompleted(taskId:string,task:any)
  {
    this.removeFromCollection("todoList",taskId);
    task["isCompleted"] = !task["isCompleted"];
    return this.addToCollection("completedList",task);

  }

  addToCollection(collectionName:string,task:string)
  {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection(collectionName)
          .add(task)
          .then(res => {}, err => reject(err));
  });
  }

  removeFromCollection(collectionName:string,taskId:string)
  {
    this.firestore
       .collection(collectionName)
       .doc(taskId)
       .delete();
  }

  readCollectionLists(collectionName:string){
    return this.firestore.collection(collectionName).snapshotChanges();
  }
}
