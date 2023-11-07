import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { allposts } from '../models/allposts_interface';
import { environment } from 'src/environment/environment.prod';
import { RequestServiceService } from 'src/services/request-service.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { NavBar } from '../models/navbar_interface';
import {MatIconModule} from '@angular/material/icon';

let ELEMENT_DATA: allposts[] = [
 
];

@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,FormsModule,MatIconModule],
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  bool:boolean=false;
  type:string='Add'
  index:number=0
  open(){
    this.bool=!this.bool
    this.form.reset()
    this.type='Add'
  }
  form!:FormGroup;
  constructor(private requestService:RequestServiceService, public fb:FormBuilder,private route:ActivatedRoute){

  };
  close(){
    this.bool=!this.bool
    this.form.reset()
 
  }

  id!:number
  image!:string
  title!:string
  short_description!:string
  edit(el:NavBar,id:number){
    this.id=id
    this.bool=!this.bool
    this.type='edit'
    this.initForm()
    this.image =el.image
    this.title=el.title
    this.short_description=el.short_description
    
  }

  ngOnInit(): void {
   
    this.requestService.getData<allposts[]>(environment.category.get).subscribe(author=>{
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
        title:['',Validators.required],
        short_description:['',Validators.required]
      })
    }else if(this.type == 'edit'){
      this.form=this.fb.group({
        image:[this.image,Validators.required],
        title:[this.title,Validators.required],
        short_description:[this.short_description,Validators.required]
      })
    }


  }
  authorsGet(){
    this.requestService.getData<allposts[]>(environment.category.get).subscribe(author=>{
      ELEMENT_DATA=author
    this.dataSource = ELEMENT_DATA;
    })
  }

  delete(index:number){
    if(confirm('delete this data?')){
      this.requestService.deleteItem(`${environment.category.get}/${index}`).subscribe(()=>{
    this.authorsGet()

      })

    }
  }
  input=document.getElementsByTagName('input')
  onSubmit(data:string){
    if(this.type=='Add'){
         this.initForm()

    this.requestService.post<allposts>(environment.category.get,data).subscribe((result)=>{
      console.log(result);
      this.authorsGet()
    })
    }else if(this.type ==='edit'){
      this.initForm()
      const editUser:NavBar = {
        image: this.input[0].value,
        title: this.input[1].value,
        short_description: this.input[2].value,
        category: undefined
      }
      this.requestService.put<NavBar>(`${environment.category.get}/${this.id}`,editUser).subscribe((result)=>{
        console.log(result);
        this.authorsGet() 
      })
    }
 
  }

 displayedColumns: string[] = ['id', 'image', 'title', 'short_description','action'];
  dataSource = ELEMENT_DATA;
}
