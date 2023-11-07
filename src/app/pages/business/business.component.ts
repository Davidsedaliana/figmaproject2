import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import { NavBar } from 'src/app/models/navbar_interface';
import { allposts } from 'src/app/models/allposts_interface';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,NavbarComponent],
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  data:allposts[]=[]
  data2:NavBar[]=[]
  category:NavBar[]=[]
filteredPosts:allposts[]=[]
data3:allposts[]=[]

selectedCategory:string=''


  constructor(private requestService:RequestServiceService, private route:ActivatedRoute,){

  }
  ngOnInit(): void {
    this.requestService.getData<allposts[]>(environment.posts.get).subscribe((author)=>{
      this.data=author
    })
    this.requestService.getData<NavBar[]>(environment.category.get).subscribe((post)=>{
      this.data2=post
    })
    this.route.params.subscribe(category=>{
      
      this.selectedCategory = category['category']
      console.log(category);
      
      this.requestService.getData<allposts[]>(`${environment.posts.get}?category=${this.selectedCategory}`).subscribe(data=>{
        this.filteredPosts = data
        this.data3=data
      })
      console.log(this.selectedCategory);
      
    })

  }
}
