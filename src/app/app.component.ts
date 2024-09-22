import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar/navbar.component';

import { CurrencylistComponent } from './components/listviews/currency/currencylist/currencylist.component';
import { TradinglistComponent } from './components/listviews/trading/tradinglist/tradinglist.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CurrencylistComponent,
    TradinglistComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TradingApp';
}
