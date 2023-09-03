import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:Date, today = new Date()): unknown {
    return Math.floor((Number(today) - Number(value)) / (60 * 60 * 24 * 365*1000))
  }

}
