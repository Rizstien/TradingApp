import { Component } from '@angular/core';
import { CoinService } from '../../../core/services/coin.service';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  coins: any[];
  constructor(private coinService: CoinService) {
    this.coins = this.coinService.getCoins();
  }
}
