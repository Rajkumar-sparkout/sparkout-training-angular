import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective implements OnInit{

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  /**
   * Renderer 2
   */
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', '14px');
  }

  /**
   * HostBinding
   */
  @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.border') border: string = 'none';

  /**
   * HostListener
   */
  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor = 'white';
    this.textColor = '#282828';
    this.border = '#282828 3px solid';
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor = '#282828';
    this.textColor = 'white';
    this.border = 'none';
  }

}
