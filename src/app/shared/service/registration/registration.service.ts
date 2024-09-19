import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/interceptors/models/user/user.model';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  
  private freeapibaseurl: string = environment.freebasebaseurl;

  constructor(
    public https: HttpClient,
    public route: Router,
    public snackBar: ToastService
  ) {}
  loginCheck: boolean = false;

   signUp(userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log(userData);
    return this.https.post(`${this.freeapibaseurl}createNewUser`, userData, { headers });
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
        this.route.navigate(['coins']);
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
