import { Component } from '@angular/core';
import { CoinService } from '../../../core/services/coin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trading.component.html',
  styleUrl: './trading.component.scss'
})
export class TradingComponent {
  coins: any[];
  constructor(private coinService: CoinService) {
    this.coins = this.coinService.getCoins();
  }
}
