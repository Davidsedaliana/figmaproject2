import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { allposts } from '../models/allposts_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import {MatSidenavModule} from '@angular/material/sidenav';
import { authors } from '../models/authors';
import {MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input'

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

let ELEMENT_DATA: allposts[] = [
 
];
@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,RouterLink,ReactiveFormsModule,MatIconModule,
    MatIconModule,MatInputModule],
  selector: 'app-allposts-table',
  templateUrl: './allposts-table.component.html',
  styleUrls: ['./allposts-table.component.css']
})
export class AllpostsTableComponent implements OnInit {
  authorsGet(){
    this.requestService.getData<allposts[]>(environment.posts.get).subscribe(author=>{
      ELEMENT_DATA=author
    this.dataSource = ELEMENT_DATA;
      
    })
  }
  constructor(private requestService:RequestServiceService,route:ActivatedRoute,public fb:FormBuilder){

  }
  index:number=0
  id!:number
  image!:string
  category!:string
  short_description!:string
  title!:string
  postUser!:string
  postData!:string
  form!:FormGroup;
  bool:boolean=false;
  categoryimg!:string
  type:string='Add'
  ngOnInit(): void {
    this.requestService.getData<allposts[]>(environment.posts.get).subscribe(author=>{
      ELEMENT_DATA=author
    this.dataSource = ELEMENT_DATA;
      
    })
    this.initForm()
    this.authorsGet()
  }
  initForm(){
    if(this.type == 'Add'){
      this.form=this.fb.group({
        image:['',Validators.required],
        category:['',Validators.required],
        categoryimg:['',Validators.required],
        title:['',Validators.required],
        short_description:['',Validators.required],
        postUser:['',Validators.required],
        postData:['',Validators.required],
      })
    }else if(this.type == 'edit'){
      this.form=this.fb.group({
        image:[this.image,Validators.required],
        category:[this.category,Validators.required],
        categoryimg:[this.categoryimg,Validators.required],
        title:[this.title,Validators.required],
        short_description:[this.short_description,Validators.required],
        postUser:[this.postUser,Validators.required],
        postData:[this.postData,Validators.required],
      })
    }


  }
  open(){
    this.bool=!this.bool
    this.form.reset()
    this.type='Add'
 
  }
  close(){
    this.bool=!this.bool
    this.form.reset()
 
  }
  edit(el:allposts,id:number){
    this.id=id
    this.bool=!this.bool
    this.type='edit'
    this.initForm()
    this.image =el.image
    this.category=el.category
    this.categoryimg=el.categoryimg
    this.title=el.title
    this.short_description=el.short_description
    this.postUser=el.postUser
    this.postData=el.postData
  }
  input=document.getElementsByTagName('input')
  onSubmit(data:string){
    if(this.type=='Add'){
         this.initForm()

    this.requestService.post<allposts>(environment.posts.get,data).subscribe((result)=>{
      console.log(result);
      this.authorsGet()
    })
    }else if(this.type ==='edit'){
      this.initForm()
      const editUser:allposts = {
        image: this.input[0].value,
        category: this.input[1].value,
        categoryimg: this.input[2].value,
        title: this.input[3].value,
        short_description: this.input[4].value,
        postUser: this.input[5].value,
        postData: this.input[6].value,
        postUserImg: ''
      }
      this.requestService.put<allposts>(`${environment.posts.get}/${this.id}`,editUser).subscribe((result)=>{
        console.log(result);
        this.authorsGet() 
      })
    }
 
  }
  delete(index:number){
    if(confirm('delete this data?')){
      this.requestService.deleteItem(`${environment.posts.get}/${index}`).subscribe(()=>{
        this.authorsGet()

      })
    }
  }
  displayedColumns: string[] = ['id', 'image', 'category', 'categoryimg','title','short_description','postUser','postData','action'];
  dataSource = ELEMENT_DATA;
}
