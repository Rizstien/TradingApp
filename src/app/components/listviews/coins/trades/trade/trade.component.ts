import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { TradingService } from '../../../../../shared/service/trade/trading.service';
import { NavbarComponent } from '../../../../../shared/component/navbar/navbar/navbar.component';
import { TradePipePipe } from '../../../../../shared/pipes/trade/trade-pipe.pipe';

import { environment } from '../../../../../../environments/environment';


@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [CommonModule, JsonPipe, TradePipePipe, NavbarComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent  implements OnInit {
    tradeList: any[] = [];
    private traderapibaseurl: string = environment.traderapibaseurl;

    constructor(public httpClient: HttpClient,private tradingservice: TradingService){ }
    ngOnInit(): void {
        this.getMockAPITradeList();
    }
    getMockAPITradeList(){    
      this.tradingservice.fetchData(this.traderapibaseurl+'v1/markets/insider-trades').subscribe((data) => {
          this.tradeList = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
}
