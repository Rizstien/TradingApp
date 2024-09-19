import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TradingComponent } from './components/TradingListView/trading/trading.component';
import { NavbarComponent } from './shared/component/navbar/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TradingComponent,
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TradingApp';
}
