import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinHours'
})
export class ToMinHoursPipe implements PipeTransform {

  transform(value: unknown, devider=60, suffixH= ' hrs ', suffixM = ' min'): unknown {
    return Math.floor(Number(value) / devider)+suffixH + (Number(value) % devider) +suffixM;
  }

}
