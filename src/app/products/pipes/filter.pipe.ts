import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../Model/Product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: products[], category: string): products[] {
    if(category=='All')
    {
      return products;
    } else{
      return products.filter(product => product.category == category);
    }
  }

}
