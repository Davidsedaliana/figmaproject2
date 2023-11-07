import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmenianDatePipe } from '../armenian-date.pipe';



@NgModule({
  declarations: [ArmenianDatePipe],
  exports: [ArmenianDatePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
