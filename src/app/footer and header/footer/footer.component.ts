import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Scroll } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  top(){
    scrollTo(0,0)    
  }
  form:FormGroup
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      email:['',Validators.required]
    })
  }
}
