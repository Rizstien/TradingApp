import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tradePipe',
  standalone: true
})
export class TradePipePipe implements PipeTransform {

  transform(value: any[], sortBy: string, isDescending: boolean = false): any[] {
    if (!value || !sortBy) {
      return value;
    }

    return value.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      // If sorting by usdValue, convert to number for comparison
      if (sortBy === 'usdValue') {
        aValue = Number(aValue.replace(/[^0-9.-]+/g,""));
        bValue = Number(bValue.replace(/[^0-9.-]+/g,""));
      }

      // Handle dates if sorting by transactionDate
      if (sortBy === 'transactionDate') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) {
        return isDescending ? 1 : -1;
      } else if (aValue > bValue) {
        return isDescending ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

}
