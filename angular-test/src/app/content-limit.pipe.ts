import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimit'
})
export class ContentLimitPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return (value.length > args[0]) ? value.substring(0, args[0]) + "..." : value;
  }

}
