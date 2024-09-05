import { Component,signal } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Observable, interval,map } from 'rxjs';
import { SortPipe } from '../../../shared/pipes/sort.pipe';

@Component({
  selector: 'app-trading',
  standalone: true,
  imports: [CommonModule, CurrencyPipe,AsyncPipe,SortPipe ],
  templateUrl: './trading.component.html',
  styleUrl: './trading.component.scss'
})
export class TradingComponent {
  coinvalue: Observable<void> = new Observable<void>();
  
  public coins: any[] = [
    { name: 'Bitcoin', value: signal(100),marketCap:"10B",volume:10000 },
    { name: 'Ethereum', value: signal(50),marketCap:"8B",volume:30000 },
    { name: 'Litecoin', value: signal(25),marketCap:"9B",volume:20000 },
    { name: 'Dodge', value: signal(88),marketCap:"7B",volume:40000 },
    { name: 'Mexi', value: signal(105),marketCap:"6B",volume:50800 },
    { name: 'Meme', value: signal(32),marketCap:"5B",volume:60000 },
    { name: 'Pepe', value: signal(120),marketCap:"4M",volume:70000 },
    { name: 'Matic', value: signal(90),marketCap:"3M",volume:80000 },
    { name: 'Near', value: signal(108),marketCap:"2M",volume:90000 },
  ];
  constructor() {
    this.getCoins();
    this.priceUpdate();
    this.pipePriceUpdate();
  }

  getCoins(): any[] {
    return this.coins;
  }

  priceUpdate() {
    setInterval(() => {
      this.coins.forEach((coin) => {
        const change = Math.floor(Math.random() * 10) - 5;
        const currentValue = coin.value();
        coin.value.set(currentValue + change);
      });
    }, 1000);
  }
  pipePriceUpdate(){
    this.coinvalue = interval(1000).pipe(map(() =>
      this.coins.forEach((coin) => {
        const currentValue = coin.value();
        const change = Math.floor(Math.random() * 10) - 5;
        coin.value.set(currentValue + change);   
        console.log(currentValue + change);
      })
    ))
  }

}
