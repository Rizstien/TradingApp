import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user: User = new User;
  constructor(
    public route: Router,
  ) {}

  signOut(){
    this.route.navigate(['/login']);
  }

}
