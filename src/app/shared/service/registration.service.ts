import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/interceptors/models/user.model';
import { JsonPipe } from '@angular/common';
import { Route, Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(
    public https: HttpClient,
    public route: Router,
    public snackBar: ToastService
  ) {}
  loginCheck: boolean = false;


  singUpUser(user: User) {
    const userJson = JSON.stringify(user);
    localStorage.setItem('Signup', userJson);
  }

  LoginUser(email: string, password: string) {
    const getUser = localStorage.getItem('Signup');
    
    if (getUser) {
      const user = JSON.parse(getUser);
      if (user.email == email && user.password == password) 
      {
        console.log('You are logged in ');
        this.loginCheck = true;
        this.snackBar.openSuccessfullySnackBar('Login Successfully', '');
        //this.route.navigate(['coins']);
        this.route.navigate(['trade']);
      } 
      else 
      {
        console.log('You are not logged in');
        this.loginCheck = false;
        this.snackBar.openfailSnackBar('Login Failed', '');
      }
    } 
    else 
    {
      console.log('Error in parsing to JSON of localstorage user item');
    }
  }
}
