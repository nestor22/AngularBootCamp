import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  //@Input() backgroundColor: string | undefined;
  constructor(private element: ElementRef) {}

  /*   @Input('appClass') set backgroundColor(value: string) {
    this.element.nativeElement.style.backgroundColor = 'orage';
  } */

  @Input('appClass') set className(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.clasList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
