import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix'
})
export class SuffixPipe implements PipeTransform {

  transform(value: unknown, suffix='FIXED',count=2): unknown {
    return value + suffix.repeat(count);
  }

}
