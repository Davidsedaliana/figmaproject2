import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestServiceService } from 'src/services/request-service.service';
import { contactUs } from 'src/app/models/contactUS';
import { environment } from 'src/environment/environment.prod';
@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,ReactiveFormsModule],
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit{
  constructor(public fb:FormBuilder,private requestService:RequestServiceService){

  }
  onSubmit(data:string){
    this.requestService.post<contactUs>(environment.contactUs.get,data).subscribe(result=>{
    })
    this.form.setValue({
      fname:'',
      mail:'',
      select:'',
      message:'',
      
    })
    alert('your message has been sent!')
  } 
  
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      fname:['',Validators.required,Validators.pattern("/^[a-z ,.'-]+$/i")],
      mail:['',Validators.required,Validators.pattern("/^[a-z ,.'-]+$/i")],
      select:['',Validators.required,Validators.pattern("/^\S+@\S+\.\S+$/") ],
      message:['',Validators.required]
    })
    
  }
}
