import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { UserService } from '../../core/service/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
LoginForm!: FormGroup;
formControls = [
  { id: 'email', label: 'Email Address:', name: 'email', type: 'text' },
  { id: 'password', label: 'Password', name: 'password', type: 'password' }
];

constructor(public userService:UserService, private fb: FormBuilder ){}

ngOnInit(): void {
  this.LoginForm = this.fb.group({
   email: ['', [Validators.required, Validators.email]],
   password: ['', Validators.required]
 });           
}

onSubmit(): void {
  if (this.LoginForm.valid) 
  {
    const formData = this.LoginForm.value;
    this.userService.LoginUser(formData);
  } 
  else 
  {
    this.LoginForm.markAllAsTouched();
  }
}
}
