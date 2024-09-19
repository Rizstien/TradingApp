import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { T } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent {
    tradeList : any;
    constructor(public httpClient: HttpClient){
      this.getMockAPITradeList();
    }

    getMockAPITradeList(){
      this.httpClient.get("https://api.apicalls.io/v1/markets/insider-trades")
      
      .subscribe((res : any) => {
        debugger

        console.log(res);
        //this.tradeList = res;
      })

    }
}
