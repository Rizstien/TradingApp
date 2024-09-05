import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone:true,
  pure: true // Marks the pipe as pure, meaning it won't recalculate unless inputs change
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string, order: string): any[] {
    if (!Array.isArray(array) || !field) {
      return array;
    }

    const sortedArray = array.sort((a, b) => {
      let fieldA, fieldB;

      if (field === 'value') 
      {
        fieldA = a[field]();
        fieldB = b[field]();
      } 
      else if (field === 'marketCap') 
      {
        // Convert marketCap to numeric value for sorting
        fieldA = this.convertMarketCap(a[field]);
        fieldB = this.convertMarketCap(b[field]);
      } 
      else 
      {
        fieldA = a[field];
        fieldB = b[field];
      }

      if (fieldA < fieldB) 
      {
        return order === 'asc' ? -1 : 1;
      } 
      else if (fieldA > fieldB) 
      {
        return order === 'asc' ? 1 : -1;
      } 
      else 
      {
        return 0;
      }
    });

    return sortedArray;
  }

  // Helper function to convert marketCap string to a numeric value for comparison
  private convertMarketCap(marketCap: string): number {
    const unit = marketCap.slice(-1); // Get the last character (B, M, etc.)
    const value = parseFloat(marketCap.slice(0, -1)); // Get the numeric part

    switch (unit.toUpperCase()) {
      case 'B':
        return value * 1e9; // Convert billions to numeric
      case 'M':
        return value * 1e6; // Convert millions to numeric
      default:
        return value; // If no unit, return as-is
    }
  }
}
