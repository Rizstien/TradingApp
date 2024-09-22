import { Component } from '@angular/core';
import {ReactiveFormsModule, } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../core/service/toast/toast.service';

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
