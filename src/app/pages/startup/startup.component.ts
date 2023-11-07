import { Component,Input, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule,RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JoinComponent } from '../join/join.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavBar } from 'src/app/models/navbar_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import { allposts } from 'src/app/models/allposts_interface';

@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,JoinComponent,NavbarComponent],
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit{
  @Input('item') item!: NavBar;
  data:NavBar[]= []
  data2:allposts[]=[]
  page:number=1
  bool:boolean=true
  bool2:boolean=true
  pages(){
    this.requestService.getData<allposts[]>(`${environment.posts.get}?_page=${this.page}&_limit=4`).subscribe((user2:allposts[])=>{
      this.data2 =user2;
    });
  }
constructor(private requestService:RequestServiceService,public route:ActivatedRoute){}
ngOnInit(): void {
  
  this.requestService.getData<NavBar[]>(environment.category.get).subscribe((user:NavBar[])=>{
    this.data =user;
  });
 this.pages()
this.next()
this.back()



}
next(){
  this.pages()
  if(this.page>=3){
  this.pages()
    this.bool=false
  }else if(this.page<=3) {
    
    this.bool2=true
    this.page++

  }
  console.log(this.page);
  

}
back(){
  if(this.page>0){
  this.page--

  this.pages()
  this.bool=true
  
  }else if(this.page<=0){
    this.pages()


    this.bool2=false
    
  }
  console.log(this.page);
  
}

}
