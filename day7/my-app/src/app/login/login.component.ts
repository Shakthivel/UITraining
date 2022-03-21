import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',"../register/register.component.scss"]
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';
  
  constructor(private todoService:TodoService,private router:Router) { }

  loginIn(signInForm:NgForm){
    var user = signInForm.value;
    this.todoService.login(user);
    this.todoService.loginFlag$.subscribe(res=>{
      console.log(res);
      if(res)
      {
        this.router.navigate(['/home']);
      }
    })
  }

  ngOnInit(): void {
  }

}
