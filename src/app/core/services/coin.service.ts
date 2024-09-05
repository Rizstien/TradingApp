import { Injectable,Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private coins: any[] = [
    { name: 'Bitcoin', value: signal(100),marketCap:"3B",volume:10000 },
    { name: 'Ethereum', value: signal(50),marketCap:"2B",volume:20000 },
    { name: 'Litecoin', value: signal(25),marketCap:"1B",volume:3400 },
    { name: 'Dodge', value: signal(88),marketCap:"1B",volume:60000 },
    { name: 'Mexi', value: signal(105),marketCap:"1B",volume:43800 },
    { name: 'Meme', value: signal(32),marketCap:"3B",volume:9999 },
    { name: 'Pepe', value: signal(120),marketCap:"4M",volume:10000 },
    { name: 'Matic', value: signal(90),marketCap:"1.2B",volume:10000 },
    { name: 'Near', value: signal(108),marketCap:"1B",volume:10000 },
  ];
  constructor() {
    this.priceUpdate();
   }
   getCoins(): any[] {
    return this.coins;
  }

   priceUpdate() {
    setInterval(() => {
      this.coins.forEach((coin) => {
        const change = Math.floor(Math.random() * 10) - 5;
        console.log(change);
        const currentValue = coin.value();
        coin.value.set(currentValue + change);
      });
    }, 1000);
  }
  
}
