import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approx',
})
export class ApproxPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    if (args.length) {
      return value.toFixed(2) + ' >> ' + args[0] + ' >> ' + args[1];
    }

    return value.toFixed(2);
  }
}
