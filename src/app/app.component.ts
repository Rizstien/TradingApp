import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/component/header/header.component";
import { FooterComponent } from "./shared/component/footer/footer.component";
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { TradingComponent } from './components/TradingListView/trading/trading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TradingComponent, HeaderComponent, FooterComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TradingApp';
}
