import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import {MatSidenavModule} from '@angular/material/sidenav';
import { authors } from '../models/authors';
import { NavBar } from '../models/navbar_interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { allposts } from '../models/allposts_interface';
import {MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input'
let ELEMENT_DATA: authors[] = [
 
];
@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,ReactiveFormsModule,MatIconModule,MatInputModule],
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css']
})
export class AuthorsTableComponent implements OnInit {
  sucsess:boolean=false
  index:number=0
  id!:number
  image!:string
  name!:string
  short_description!:string
  facebook!:string
  in!:string
  instagram!:string
  twiter!:string
  form!:FormGroup;
  bool:boolean=false;
  type:string='Add'
  open(){
    this.bool=!this.bool
    this.form.reset()
    this.type='Add'
  }
  
  authorsGet(){
    this.requestService.getData<authors[]>(environment.usersInfo.get).subscribe(author=>{
      ELEMENT_DATA=author
    this.dataSource = ELEMENT_DATA;
      
    })
  }
  constructor(private requestService:RequestServiceService,route:ActivatedRoute,public fb:FormBuilder){
   
  }
    ngOnInit(): void {
 
      this.requestService.getData<authors[]>(environment.usersInfo.get).subscribe(author=>{
        ELEMENT_DATA=author
      this.dataSource = ELEMENT_DATA;
        
      })
      this.authorsGet()
      this.initForm()
  }
  initForm(){
    if(this.type == 'Add'){
      this.form=this.fb.group({
        image:['',Validators.required],
        name:['',Validators.required],
        short_description:['',Validators.required],
        facebook:['',Validators.required],
        twiter:['',Validators.required],
        instagram:['',Validators.required],
        in:['',Validators.required],
      })
    }else if(this.type == 'edit'){
      this.form=this.fb.group({
        image:[this.image,Validators.required],
        name:[this.name,Validators.required],
        short_description:[this.short_description,Validators.required],
        facebook:[this.facebook,Validators.required],
        twiter:[this.twiter,Validators.required],
        instagram:[this.instagram,Validators.required],
        in:[this.in,Validators.required],
      })
    }


  }
  close(){
    this.bool=!this.bool
    this.form.reset()
 
  }
  edit(el:authors,id:number){
    this.id=id
    this.bool=!this.bool
    this.type='edit'
    this.initForm()
    this.image =el.image
    this.name=el.name
    this.short_description=el.short_description
    this.facebook=el.facebook
    this.twiter=el.twiter
    this.instagram=el.instagram
    this.in=el.in
  }
  delete(index:number){
        if(confirm('delete this data?')){
          this.requestService.deleteItem(`${environment.usersInfo.get}/${index}`).subscribe(()=>{
          this.authorsGet()

          })
        }
  }
  input=document.getElementsByTagName('input')
  onSubmit(data:string){
    if(this.type=='Add'){
         this.initForm()

    this.requestService.post<authors>(environment.usersInfo.get,data).subscribe((result)=>{
      console.log(result);
      this.authorsGet()
    })
    

    }else if(this.type ==='edit'){
      this.initForm()
      const editUser:authors = {
        image: this.input[0].value,
        name: this.input[1].value,
        short_description: this.input[2].value,
        facebook: this.input[3].value,
        twiter: this.input[4].value,
        instagram: this.input[5].value,
        in: this.input[6].value
      }
      this.requestService.put<authors>(`${environment.usersInfo.get}/${this.id}`,editUser).subscribe((result)=>{
        console.log(result);
        this.authorsGet() 
      })
    }
    this.sucsess=true
    setTimeout(() => {
      this.sucsess=false
    
      }, 30000);
  }

  displayedColumns: string[] = ['id', 'image', 'name', 'short_description','facebook','twiter','instagram','in','action'];
  dataSource = ELEMENT_DATA;
}
