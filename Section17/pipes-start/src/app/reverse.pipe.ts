import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    const caractersArray = value.split('');
    return caractersArray.reverse().join('');
  }

}
