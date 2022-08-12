import { productdetails } from './../Shared/Interface/details';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(product: productdetails[], categories:string) {
    if (categories == 'All'){
      return product;
    }
    else{
      return product.filter(product => product.category == categories);
    } 
  }

}
