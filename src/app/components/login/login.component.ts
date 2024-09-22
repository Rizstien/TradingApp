import { Component } from '@angular/core';
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

constructor(public userService:UserService )
{

}

loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')});
    onSubmit()
    {
      const emailValue=this.loginForm.get('email')?.value;
      const passwordValue=this.loginForm.get('password')?.value;
      if(emailValue!=null &&passwordValue!=null )
      {
        this.userService.LoginUser(emailValue,passwordValue);
      }
    }
}
