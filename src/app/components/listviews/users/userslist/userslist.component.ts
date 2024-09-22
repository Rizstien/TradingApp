import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TradePipePipe } from '../../../../shared/pipes/trade/trade-pipe.pipe';
import { NavbarComponent } from '../../../../shared/component/navbar/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { TradingService } from '../../../../shared/service/trade/trading.service';

@Component({
  selector: 'app-userslist',
  standalone: true,
  imports: [CommonModule, JsonPipe, TradePipePipe, NavbarComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {
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
