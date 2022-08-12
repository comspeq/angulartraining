import { productdetails } from './../Shared/Interface/details';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpromotion'
})
export class FilterpromotionPipe implements PipeTransform {

  transform(product: productdetails[], promotion: boolean) {
    return product.filter(product=> product.promotion == promotion);;
  }

}
