import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  constructor(private el:ElementRef) {
    console.log(this.el.nativeElement)
   }
@HostListener('click') changeColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.el.nativeElement.style.backgroundColor=`rgb${red},${green},${blue}`
}
}
