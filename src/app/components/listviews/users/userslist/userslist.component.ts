import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/component/navbar/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { UserService } from '../../../../core/service/user/user.service';
import { ToastService } from '../../../../core/service/toast/toast.service';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule, JsonPipe, NavbarComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {
  
  usersList: any[] = [];
  
  
  private freeapibaseurl: string = environment.freebasebaseurl;


  constructor(
    public httpClient: HttpClient,
    private userservice: UserService,
    public snackBar: ToastService,
  ){ }
  
  
  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList(){    
    this.userservice.fetchUsersData(this.freeapibaseurl+'JWT/GetAllUsers').subscribe((data) => 
      { 
        this.snackBar.openSuccessfullySnackBar('Users List Found Successfully', '');
        this.usersList = data;
      },error => 
      { 
        const errorMessage = error.error ? error.error.message || error.message : error.message || 'Unknown error occurred';
        this.snackBar.openfailSnackBar('Login Failed: ' + errorMessage, '');
      }
    );
  }
}
