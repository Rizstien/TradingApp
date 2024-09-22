import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(
    public route: Router,
  ) {}

  signOut(){
    localStorage.removeItem("userInfo");
    this.route.navigate(['/login']);
  }

}
