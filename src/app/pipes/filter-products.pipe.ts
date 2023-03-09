import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterProducts',
  pure: false
})
export class FilterProductsPipe implements PipeTransform {

  transform(product: Product[], search: string): Product[] {
    return product.filter(p => p.title.toLocaleLowerCase().includes(search.toLowerCase()));
  }

}
