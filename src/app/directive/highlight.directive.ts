import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() highLightColor: string = '';

  constructor(private el: ElementRef) {
    // console.log("Inside the custome directive");
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highLightColor || "yellow");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("");
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
