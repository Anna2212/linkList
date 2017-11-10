import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector: '[appMove]'
})

export class MoveDirective{
  private timerId;
  @HostBinding('class.moved') isMoved = false;

  @HostListener('mouseenter') onmouseenter () {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
          this.isMoved = true
      }, 5000)
  }
  @HostListener('mouseleave') onmouseleave () {
      clearTimeout(this.timerId);
      this.isMoved = false;
  }
  @HostListener('mousemove') onMouseMove(){
      clearTimeout(this.timerId);
      this.isMoved = false;
      this.timerId = setTimeout(() => {
          this.isMoved = true
      }, 5000)
  }
}