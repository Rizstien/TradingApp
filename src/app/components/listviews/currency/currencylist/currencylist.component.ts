import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../../../shared/component/navbar/navbar/navbar.component';
import { CoinPipePipe } from '../../../../shared/pipes/coins/coin-pipe.pipe';

@Component({
  selector: 'app-currencylist',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, AsyncPipe, NavbarComponent, CoinPipePipe],
  templateUrl: './currencylist.component.html',
  styleUrl: './currencylist.component.scss'
})
export class CurrencylistComponent {
  public coins: any[] = [
    { name: 'Bitcoin', value: signal(100),marketCap:"10B",volume:signal(10000) },
    { name: 'Ethereum', value: signal(50),marketCap:"8B",volume:signal(30000) },
    { name: 'Litecoin', value: signal(25),marketCap:"9B",volume:signal(20000) },
    { name: 'Dodge', value: signal(88),marketCap:"7B",volume:signal(40000) },
    { name: 'Mexi', value: signal(105),marketCap:"6B",volume:signal(50800) },
    { name: 'Meme', value: signal(32),marketCap:"5B",volume:signal(60000) },
    { name: 'Pepe', value: signal(120),marketCap:"4M",volume:signal(70000) },
    { name: 'Matic', value: signal(90),marketCap:"3M",volume:signal(80000) },
    { name: 'Near', value: signal(108),marketCap:"2M",volume:signal(90000) }
  ];
  constructor() {
    this.getCoins();
    this.priceUpdate();
  }

  getCoins(): any[] {
    return this.coins;
  }

  priceUpdate() {
    setInterval(() => {
      this.coins.forEach((coin) => {
        const change = Math.floor(Math.random() * 10) - 5;
        const currentValue = coin.value();
        const newValue = currentValue + change;
        if (newValue >= 0) {
          coin.value.set(newValue);
        }

        const changeVol = Math.floor(Math.random() * 10) - 2000;
        const currentVolume = coin.volume();
        const newVolume = currentVolume + changeVol;
        if (newVolume >= 0) {
          coin.volume.set(newVolume);
        }

      });
    }, 1000);
  }

}
