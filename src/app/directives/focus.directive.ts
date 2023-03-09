import { Directive, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

}
