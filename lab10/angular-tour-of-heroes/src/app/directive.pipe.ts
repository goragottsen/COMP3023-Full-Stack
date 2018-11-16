import { Directive, HostListener, ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customInputFormat'
})
export class DirectivePipe implements PipeTransform {


  transform(value: any, args?: any): any {
      return value.uppercase;
  }

}
