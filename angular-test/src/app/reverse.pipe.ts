import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './models/article.model';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: Article[]) {
    return value.slice().reverse();
  }
}
