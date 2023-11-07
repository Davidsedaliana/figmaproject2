import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { allposts } from 'src/app/models/allposts_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment';
import { authors } from 'src/app/models/authors';
import{MatSlideToggleModule} from '@angular/material/slide-toggle'

@Component({
 
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,MatSlideToggleModule],
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
data:allposts[]=[]
getId:authors[]=[]
selectedId:string=''
filteredById:allposts[]=[]
constructor( private requestService:RequestServiceService,private route:ActivatedRoute){

}
ngOnInit(): void{
  // this.requestService.getData<allposts[]>(environment.posts.get).subscribe((user:allposts[])=>{
  //   this.data=user;
  // });
  this.route.params.subscribe(getId=>{
    this.selectedId=getId['id']
    console.log(getId);
    this.requestService.getData<allposts[]>(`${environment.posts.get}?id=${this.selectedId}`).subscribe(data2=>{
      this.filteredById=data2
      console.log(this.filteredById);
      
    })
  })
}
}
