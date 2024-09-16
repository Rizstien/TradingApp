import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { JsonPipe } from '@angular/common';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(public https:HttpClient,public route:Router) { }
  loginCheck:boolean=false;
  signupService(user:User)
  {
    const userJson = JSON.stringify(user);
    localStorage.setItem("Signup",userJson);
  }


  loginService(email:string,password:string)
  {
    const getUser=localStorage.getItem("Signup");
    if(getUser)
    {
      const user = JSON.parse(getUser);
      if(user.email==email && user.password==password)
      {
        console.log("You are logged in ");
        this.loginCheck=true;
        this.route.navigate(['trading']);
      }
      else
      {
        console.log("You are not logged in");
        this.loginCheck=false;
      }
    }
    else
    {
      console.log("Error in parsing to JSON of localstorage user item");
      
    }
   
  }
}
