import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomColorDirective } from '../random-color.directive';



@NgModule({
  declarations: [RandomColorDirective],
  exports:[RandomColorDirective],
  imports: [
    CommonModule
  ]
})
export class RandomcolorModule { }
