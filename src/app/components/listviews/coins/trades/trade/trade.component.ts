import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { T } from '@angular/cdk/keycodes';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss'
})
export class TradeComponent  implements OnInit {
    tradeList : any;
    constructor(public httpClient: HttpClient)
    {
       
    }
    
    ngOnInit(): void {
        console.log('ngOnInit called');
        this.getMockAPITradeList();
    }
    getMockAPITradeList(){
      this.httpClient.get("https://api.apicalls.io/v1/markets/insider-trades").subscribe((res : any) => {
        this.tradeList = res;
      })

    }


    // getMockAPITradeList(){
      
    
    
    
    //   this.tradingService.fetchData('https://api.apicalls.io/v1/markets/insider-trades').subscribe((data) => {
    //       this.tradeList = data; // Data contains the 'body' array
    //     },
    //     (error) => {
    //       console.error('Error fetching data:', error);
    //     }
    //   );
    
    
    
    
    // }
}
