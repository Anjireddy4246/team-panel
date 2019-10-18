import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newValue: string = '';
    console.log(args);
    for (var i = value.length - 1; i >= 0; i--) {
      newValue += value.charAt(i);
    }
    return newValue;
  }

}
