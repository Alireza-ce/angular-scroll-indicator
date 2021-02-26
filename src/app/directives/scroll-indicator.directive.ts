import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[scrollIndicator]'
})
export class ScrollIndicatorDirective {

  constructor() { }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    var winScroll = event.target['scrollingElement'].scrollTop;
    var height = event.target['scrollingElement'].scrollHeight - event.target['scrollingElement'].clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";
  }

}
