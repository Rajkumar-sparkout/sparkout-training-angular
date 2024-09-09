import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective implements OnInit{

  // private element!: ElementRef
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element = element
  }
  ngOnInit(): void {
    /**
     * Directly access the element using directive
     */
    // this.element.nativeElement.style.backgroundColor = 'black';
    // this.element.nativeElement.style.color = 'white';

    /**
     * Withot directly access the element using renderer2
     */
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is example title');
  }

}
