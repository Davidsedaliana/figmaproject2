import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet,} from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavBar } from 'src/app/models/navbar_interface';
import { JoinComponent } from '../join/join.component';
import { ListauthorsComponent } from 'src/app/components/listauthors/listauthors.component';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import { allposts } from 'src/app/models/allposts_interface';
import { images } from 'src/app/models/images_interface';
import { authors } from 'src/app/models/authors';
import { BlogComponent } from '../blog/blog.component';
@Component({
  standalone:true,
  imports:[RouterModule,RouterOutlet,RouterLink,CommonModule,NavbarComponent,JoinComponent,BlogComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:NavBar[]= []
  data2:allposts[]=[]
  data3:images[]=[]
  data4:authors[]=[]
  constructor(private requestService:RequestServiceService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.requestService.getData<NavBar[]>(environment.category.get).subscribe((user:NavBar[])=>{
      this.data =user;
      
    });
    
    this.requestService.getData<allposts[]>(environment.posts.get).subscribe((user2:allposts[])=>{
      this.data2=user2;

    });

    this.requestService.getData<images[]>(environment.images.get).subscribe((user3:images[])=>{
      this.data3=user3
    });
    this.requestService.getData<authors[]>(environment.usersInfo.get).subscribe((user4:authors[])=>{
      this.data4=user4

    });
  }
  
}
