import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount1'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number | undefined, ...args: number[]): number {
    if(value!=undefined){
    return (value - value * args[0]/100);
    }
    else
    {
      return 0;
    }

  }

}
