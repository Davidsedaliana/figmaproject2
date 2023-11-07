import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { allposts } from '../models/allposts_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { authors } from '../models/authors';
import { NavBar } from '../models/navbar_interface';



@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data:allposts[]=[]
  data2:authors[]=[]
  data3:NavBar[]=[]
   constructor(private requestService:RequestServiceService,route:ActivatedRoute){
  
   }
   ngOnInit(): void {
    this.requestService.getData<allposts[]>(environment.posts.get).subscribe(author=>{
    
    this.data = author
  })
  
    this.requestService.getData<authors[]>(environment.usersInfo.get).subscribe(author=>{
      this.data2=author
    })
    this.requestService.getData<NavBar[]>(environment.category.get).subscribe(author=>{
    this.data3 =author
    })}
}
