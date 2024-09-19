import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar/navbar.component';
import { CoinsComponent } from './components/listviews/coins/coins/coins/coins.component';
import { TradeComponent } from './components/listviews/coins/trades/trade/trade.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CoinsComponent,
    TradeComponent
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TradingApp';
}
