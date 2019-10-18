import { Directive, Input, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input("highlight") highlightColor: string;

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightBackgroundColor(this.highlightColor);
    this.setBorderColor('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightBackgroundColor(null);
    this.setBorderColor(null);
  }


  @HostBinding('style.color') borderColor: string;

  highlightBackgroundColor(colorname: string) {
    this.el.nativeElement.style.backgroundColor = colorname;
  }

  setBorderColor(colorName: string) {
    this.borderColor = colorName;
  }

}
