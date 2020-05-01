import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Object>): any {
    return value.sort(this.compare);
  }

  private compare(a, b) {
    if (a.name > b.name) { return 1; }
    if (a.name < b.name) { return -1; }
  }
}
