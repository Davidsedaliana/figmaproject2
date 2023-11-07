import { Component,Input, OnInit } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ListauthorsComponent } from 'src/app/components/listauthors/listauthors.component';
import { authors } from 'src/app/models/authors';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';
import { RandomcolorModule } from 'src/app/directives/randomcolor/randomcolor.module';

@Component({
  standalone:true,
  imports:[JoinComponent,NgIf, PipesModule, RouterModule,RouterLink,RouterOutlet,RandomcolorModule,ListauthorsComponent,CommonModule],
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit  {
usersInfo:authors[]=[]
date:Date= new Date()
constructor(private requestService:RequestServiceService,public router:Router){

}
ngOnInit(): void {
  this.requestService.getData<authors[]>(environment.usersInfo.get).subscribe((users_name:authors[])=>{
    this.usersInfo = users_name

  })
}
}
