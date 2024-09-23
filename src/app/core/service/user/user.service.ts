import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Registration } from '../../models/registration/registration.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private freeapibaseurl: string = environment.freebasebaseurl;
  
  loginCheck: boolean = false;
  loginmodel = {
    EmailId: "",
    Password: ""
  }  
  
  registermodel = {
    userId : 0,
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    emailId: "",
    altMobileNo: "",
    password: "",
    userAddress: {
      city: "",
      state: "",
      pincode: "",
      addressLine: "",
    },
    userSocialDetails: {
      facebookProfileUrl: "",
      linkdinProfileUrl: "",
      instagramHandle: "",
      twitterHandle: ""
    }
  } 

  constructor( 
    public https: HttpClient,
    public route: Router,
    public snackBar: ToastService,) { }

  LoginUser(formData: any) {
    this.loginmodel.EmailId = formData.email;
    this.loginmodel.Password = formData.password;
    this.https.post(this.freeapibaseurl+"JWT/login",this.loginmodel).subscribe((res: any) =>
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
  RegisterUser(formData: any): Observable<any> {
    this.registermodel.userId = 0;
    this.registermodel.firstName = formData.firstname;
    this.registermodel.middleName = formData.middlename;
    this.registermodel.lastName = formData.lastname;
    this.registermodel.mobileNo = formData.mobile;
    this.registermodel.altMobileNo = formData.mobile;
    this.registermodel.emailId = formData.email;
    this.registermodel.password  = formData.password;
    this.registermodel.userAddress.state = formData.state;
    this.registermodel.userAddress.city = formData.city;
    this.registermodel.userAddress.pincode = formData.pincode;
    this.registermodel.userAddress.addressLine = formData.address;
    return this.https.post('https://freeapi.miniprojectideas.com/api/JWT/CreateNewUser', this.registermodel);
   
  }


  fetchUsersData(url: string): Observable<any> {
    return this.https.get(url).pipe(map((response: any) => response.data));
  }


}



