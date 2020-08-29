import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  
  selector: '[appHighlight]'
})

export class HighlightDirective {

  
  constructor(private e1: ElementRef) { }
  @Input() defaultColor: string;
  @Input('appHighlight') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor||'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color:string){
    this.e1.nativeElement.style.backgroundColor = color;
  }
}
