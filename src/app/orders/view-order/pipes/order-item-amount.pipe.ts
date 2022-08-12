import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderItemAmount'
})
export class OrderItemAmountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
