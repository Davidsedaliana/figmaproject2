import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Scroll } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule,NgStyle],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  top(){
    scrollTo(0,0)    
  }
  form!:FormGroup
  @Input() item:any;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    let btn = document.getElementsByClassName('footer_button') 

    this.form=this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
    
  }
}
