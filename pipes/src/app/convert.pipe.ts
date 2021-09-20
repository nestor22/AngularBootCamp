import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnit: any): number | string {
    if (!value) {
      return '';
    }

    switch (value) {
      case 'm':
        return value * 1.60934 * 1000;
      case 'km':
        return value * 1.60934;
      default:
        return value * 1000;
    }
  }
}
