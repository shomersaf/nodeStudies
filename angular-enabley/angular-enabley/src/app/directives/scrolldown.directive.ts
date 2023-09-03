import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrolldown]'
})
export class ScrolldownDirective implements OnInit {

  constructor(private e: ElementRef) { }
  ngOnInit() {
    let h: HTMLElement = this.e.nativeElement;
    h.scrollIntoView(true);
   console.log('should work')
  }

}

