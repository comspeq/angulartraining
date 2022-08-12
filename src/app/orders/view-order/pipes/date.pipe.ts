import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    const d = new Date(value)    
    return d.toISOString().split('T')[0];
  }

}
