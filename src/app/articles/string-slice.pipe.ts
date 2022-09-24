import {  Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stringslice'
})

export class StringSlicePipe implements PipeTransform{
    transform(value: any, count: number): any {
        return value.length > count ? value.slice(0, count)+"..." : value;
    }
}