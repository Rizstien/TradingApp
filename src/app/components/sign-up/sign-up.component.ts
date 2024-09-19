import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../shared/service/registration/registration.service';
import { User } from '../../core/interceptors/models/user/user.model';
import { ToastService } from '../../shared/service/toast/toast.service';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  

  constructor( public route: Router,public registrationservice: UserService,public snackBar: ToastService, private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      contactNo: ['', Validators.required],
      role: 'admin'
    });
  }




  onSubmit() {
    if (this.signUpForm.valid) {
      alert();
      this.registrationservice.signUp(this.signUpForm.value).subscribe(
        response => {
          console.log('User signed up successfully!', response);
          this.snackBar.openSuccessfullySnackBar('Sign Up Successfully', '');
          this.route.navigate(['/login']);
        },
        error => {
           this.snackBar.openfailSnackBar('Sign Up Failed', '');
          this.route.navigate(['/signup']);
        }
      );
    }
  }


  // onSubmit() {
    
  //   const nameValue: any = this.signup.get('name')?.value;
  //   const emailValue: any = this.signup.get('email')?.value;
  //   const userNameValue: any = this.signup.get('userName')?.value;
  //   const contactValue: any = this.signup.get('contact')?.value;
  //   const passwordValue: any = this.signup.get('password')?.value;


  //   const user: User = {
  //     name: nameValue,
  //     email: emailValue,
  //     username: userNameValue,
  //     contact : contactValue,
  //     password: passwordValue,
  //   };
  //   this.registrationservice.singUpUser(user);

  //   this.snackBar.openSuccessfullySnackBar('Sign Up Successfully', '');
  //   this.route.navigate(['/login']);
  // }
}
