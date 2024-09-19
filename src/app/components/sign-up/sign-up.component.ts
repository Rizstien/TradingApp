import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistrationService } from '../../shared/service/registration.service';
import { User } from '../../core/interceptors/models/user.model';
import { ToastService } from '../../shared/service/toast.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(
    public route: Router,
    public registrationservice: RegistrationService,
    public snackBar: ToastService
  ) {}
  signup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    const nameValue: any = this.signup.get('name')?.value;
    const emailValue: any = this.signup.get('email')?.value;
    const passwordValue: any = this.signup.get('password')?.value;
    const user: User = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };
    this.registrationservice.signupService(user);

    this.snackBar.openSuccessfullySnackBar('Sign Up Successfully', '');
    this.route.navigate(['/login']);
  }
}
