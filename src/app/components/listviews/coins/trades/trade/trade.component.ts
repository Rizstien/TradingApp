import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { TradingService } from '../../../../../shared/service/trade/trading.service';
import { NavbarComponent } from '../../../../../shared/component/navbar/navbar/navbar.component';




@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [CommonModule, JsonPipe, NavbarComponent],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent  implements OnInit {
    tradeList: any[] = [];
    constructor(public httpClient: HttpClient,private tradingservice: TradingService){ }
    ngOnInit(): void {
        console.log('ngOnInit called');
        this.getMockAPITradeList();
    }
    getMockAPITradeList(){    
      this.tradingservice.fetchData('https://api.apicalls.io/v1/markets/insider-trades').subscribe((data) => {
          console.log(data);
          this.tradeList = data;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
}
