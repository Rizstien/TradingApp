import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private freeapibaseurl: string = environment.freebasebaseurl;
  loginCheck: boolean = false;

  currentUser = {
    EmailId: "",
    Password: ""
  }  

  constructor( 
    public https: HttpClient,
    public route: Router,
    public snackBar: ToastService,) { }

  LoginUser(email: string, password: string) {
    this.currentUser.EmailId = email;
    this.currentUser.Password = password;
    this.https.post("https://freeapi.miniprojectideas.com/api/JWT/login",this.currentUser).subscribe((res: any) =>
    {
      if(res.result)
      {
        this.loginCheck = true;
        
        localStorage.removeItem("userInfo");
        localStorage.setItem("userInfo", JSON.stringify(res.data));

        this.snackBar.openSuccessfullySnackBar('Login Successfully', '');
        this.route.navigate(['coins']);
      }
      else
      {
        this.loginCheck = false;
        localStorage.removeItem("userInfo");
        this.snackBar.openfailSnackBar('Login Failed', '');
      }
    },error =>{
      const errorMessage = error.error ? error.error.message || error.message : error.message || 'Unknown error occurred';
      this.snackBar.openfailSnackBar('Login Failed: ' + errorMessage, '');
    });
  }


  fetchUsersData(url: string): Observable<any> {
    return this.https.get(url).pipe(
      map((response: any) => response.data)
    );
  }


}



