import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'pasteCurrencySymbolAndSpaces',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
  }
}