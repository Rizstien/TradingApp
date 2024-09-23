import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ToastService } from '../../core/service/toast/toast.service';
import { UserService } from '../../core/service/user/user.service';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  formControls = [
    { id: 'firstname', label: 'First Name', name: 'firstname', type: 'text' },
    { id: 'middlename', label: 'Middle Name', name: 'middlename', type: 'text' },
    { id: 'lastname', label: 'Last Name', name: 'lastname', type: 'text' },
    { id: 'mobile', label: 'Mobile', name: 'mobile', type: 'text' },
    { id: 'email', label: 'Email', name: 'email', type: 'email' },
    { id: 'password', label: 'Password', name: 'password', type: 'password' },
    { id: 'state', label: 'State', name: 'state', type: 'text' },
    { id: 'city', label: 'City', name: 'city', type: 'text' },
    { id: 'pincode', label: 'Pin Code', name: 'pincode', type: 'text' },
    { id: 'address', label: 'Address', name: 'address', type: 'text' }
  ];

  constructor(public route: Router,
              private fb: FormBuilder,
              public userService:UserService,
              public snackBar: ToastService)  { }

  ngOnInit(): void {
     this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['',Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      address: ['', Validators.required]
    });           
  }
  onSubmit(): void {
    if (this.signUpForm.valid) 
    {
      const formData = this.signUpForm.value;
      this.userService.RegisterUser(formData).pipe(
          catchError((error: any) => {
            console.error("An error occurred:", error);
            return throwError(() => new Error(error));
          }),
        )
        .subscribe((signupresponse) => {
          if (signupresponse.result) 
          {
              this.snackBar.openSuccessfullySnackBar('Sign Up Successfully', '');
              this.route.navigate(['/login']);
          } 
          else 
          {
            console.log(signupresponse);
            this.snackBar.openfailSnackBar('Sign Up Failed'+signupresponse,'');
            this.route.navigate(['/login']);
          }
        });
    } 
    else 
    {
      this.signUpForm.markAllAsTouched();
    }
  }
}
