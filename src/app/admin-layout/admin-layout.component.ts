import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { allposts } from '../models/allposts_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { authors } from '../models/authors';
import { NavBar } from '../models/navbar_interface';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,MatCardModule,MatIconModule,MatButtonToggleModule],
  selector: 'app-admin-layout', 
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
constructor(private route:Router){

}
logout(){
  if(confirm('Do you want to exit')){
    localStorage.removeItem('token')
    this.route.navigate(['auth'])
  }
}

toggle:boolean=true;

}
