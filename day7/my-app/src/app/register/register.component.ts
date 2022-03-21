import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private todoService:TodoService,private router:Router) { }

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  onSubmit(){
    let name=this.registerForm.controls['name'].value;
    let email=this.registerForm.controls['email'].value;
    let password=this.registerForm.controls['password'].value;

    if(this.registerForm.valid)
    {
      this.todoService.register({name:name,email:email,password:password});
      this.router.navigate(['/home'])
    }
  }
}
