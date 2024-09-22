import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  
  private freeapibaseurl: string = environment.freebasebaseurl;
  
  currentUser = {
    EmailId: "",
    Password: ""
  }  
  constructor(
    public https: HttpClient,
    public route: Router,
    public snackBar: ToastService,
  ) {}
  loginCheck: boolean = false;

   

  LoginUser(email: string, password: string) {
    this.currentUser.EmailId = email;
    this.currentUser.Password = password;
    this.https.post("https://freeapi.miniprojectideas.com/api/JWT/login",this.currentUser).subscribe((res: any) =>{
      if(res.result){
        this.loginCheck = true;
        this.snackBar.openSuccessfullySnackBar('Login Successfully', '');
        this.route.navigate(['coins']);
      }else{
        this.loginCheck = false;
        this.snackBar.openfailSnackBar('Login Failed', '');
      }
    })
  }
}
