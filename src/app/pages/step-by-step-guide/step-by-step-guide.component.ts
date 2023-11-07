import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { JoinComponent } from '../join/join.component';
import { RequestServiceService } from 'src/services/request-service.service';
import { allposts } from 'src/app/models/allposts_interface';
import { environment } from 'src/environment/environment.prod';
import { authors } from 'src/app/models/authors';
@Component({
  standalone:true,
  imports:[RouterModule,RouterOutlet,RouterLink,CommonModule,NavbarComponent,JoinComponent],
  selector: 'app-step-by-step-guide',
  templateUrl: './step-by-step-guide.component.html',
  styleUrls: ['./step-by-step-guide.component.css']
})
export class StepByStepGuideComponent implements OnInit {
  data:allposts[]=[]
getId:authors[]=[]
selectedId:string=''
filteredById:allposts[]=[]
bool:boolean=true;
bool2:boolean=false;
  constructor(private requestService:RequestServiceService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
  this.requestService.getData<allposts[]>(`${environment.posts.get}?_end=3`).subscribe((author)=>{
    this.data=author
    
   
  })
  this.route.params.subscribe(getId=>{
    this.selectedId=getId['id']
    this.requestService.getData<allposts[]>(`${environment.posts.get}?id=${this.selectedId}`).subscribe(data2=>{
      this.filteredById=data2
    })
  })
  }
  closepage(){
    this.bool=false;
    this.bool2=true;
  }

}
