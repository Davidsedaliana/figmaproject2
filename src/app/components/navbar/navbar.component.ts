import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { allposts } from 'src/app/models/allposts_interface';
import { NavBar } from 'src/app/models/navbar_interface';
import { JoinComponent } from 'src/app/pages/join/join.component';
import { environment } from 'src/environment/environment.prod';
import { RequestServiceService } from 'src/services/request-service.service';

@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,RouterLink,JoinComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() item!: NavBar;
selectedCategory:string=''
filteredPosts:allposts[]=[]
category:NavBar[]=[]
constructor(private route:ActivatedRoute,private requestService:RequestServiceService){}
ngOnInit(): void {

  }
  
}

