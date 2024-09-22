import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/service/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

constructor(public userService:UserService ){}

loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')});
    onSubmit(){
      const email=this.loginForm.get('email')?.value;
      const password=this.loginForm.get('password')?.value;
      if(email!=null &&password!=null )
        this.userService.LoginUser(email,password);
    }
}
