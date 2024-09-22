import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../shared/service/registration/registration.service';

import { ToastService } from '../../shared/service/toast/toast.service';



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
              public snackBar: ToastService) 
  {
    
  }

  onSubmit() {
    this.route.navigate(['/login']);
    this.snackBar.openSuccessfullySnackBar('Sign Up Successfully', '');
  }
}
