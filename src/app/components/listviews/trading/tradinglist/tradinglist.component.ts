import { CommonModule, JsonPipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';

import { NavbarComponent } from '../../../../shared/component/navbar/navbar/navbar.component';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TradingService } from '../../../../core/service/trade/trading.service';
import { TradingSortPipe } from '../../../../shared/pipes/trading/trading-sort.pipe';

@Component({
  selector: 'app-tradinglist',
  standalone: true,
  imports: [CommonModule, JsonPipe, TradingSortPipe, NavbarComponent],
  templateUrl: './tradinglist.component.html',
  styleUrl: './tradinglist.component.scss'
})
export class TradinglistComponent implements OnInit {
  tradeList: any[] = [];
  private traderapibaseurl: string = environment.traderapibaseurl;
  constructor(public httpClient: HttpClient,private tradingservice: TradingService){ }
  ngOnInit(): void {
    this.getMockAPITradeList();
  }
  getMockAPITradeList(){    
    this.tradingservice.fetchData(this.traderapibaseurl+'v1/markets/insider-trades').subscribe((data) => {
        this.tradeList = data;
        console.log(this.tradeList);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
