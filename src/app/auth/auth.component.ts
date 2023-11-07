import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
@Component({
  standalone:true,
    imports:[RouterModule,MatInputModule,ReactiveFormsModule,CommonModule,RouterLink,MatCommonModule,MatButtonModule],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form!:FormGroup
  constructor(private route:Router, public fb:FormBuilder,private requestService:RequestServiceService){
    
  }
  data:any
  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

onSubmit(data:string){
this.requestService.postlog(data).subscribe((res)=>{
  localStorage.setItem('token',res.token)
})
this.route.navigate(['admin/dashboard'])
} 
}
