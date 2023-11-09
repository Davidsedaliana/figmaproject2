import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestServiceService } from 'src/services/request-service.service';
import { contactUs } from '../../../app/models/contactUS';
import { environment } from '../../../environment/environment.prod';
@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,ReactiveFormsModule],
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit{
  constructor(private fb:FormBuilder,private requestService:RequestServiceService){

  }
  onSubmit(data:string){
    this.requestService.post<contactUs>(environment.contactUs.get,data).subscribe(result=>{
    })
    this.form.setValue({
      fname:'',
      mail:'',
      message:'',
      
    })
    alert('your message has been sent!')
  } 
  
  form!:FormGroup
  unamePattern = `^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$`;
  ngOnInit(): void {
    this.form=this.fb.group({
      fname:['',[Validators.required,Validators.pattern(this.unamePattern)]],
      mail:['',[Validators.required,Validators.email]],
      select:['',Validators.required],
      message:['',Validators.required]
    })
      
  }

}
