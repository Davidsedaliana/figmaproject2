import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { RequestServiceService } from 'src/services/request-service.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { contactUs } from '../models/contactUS';
import { environment } from '../../environment/environment.prod';
let ELEMENT_DATA: contactUs[] = [
 
];
@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,MatButtonModule,MatTableModule,MatSidenavModule,ReactiveFormsModule],

  selector: 'app-contact-us-table',
  templateUrl: './contact-us-table.component.html',
  styleUrls: ['./contact-us-table.component.css']
})


export class ContactUsTableComponent implements OnInit {
  authorsGet(){
    this.requestService.getData<contactUs[]>(environment.contactUs.get).subscribe(author=>{
      ELEMENT_DATA=author
    this.dataSource = ELEMENT_DATA;
      
    })
  }
  constructor(private requestService:RequestServiceService,route:ActivatedRoute){
   
  }
  delete(index:number){
    if(confirm('delete this data?')){
      this.requestService.deleteItem(`${environment.contactUs.get}/${index}`).subscribe(()=>{
    this.authorsGet()

      })

    }
  }
  ngOnInit(): void {
      this.authorsGet()
  }
  displayedColumns: string[] = ['id', 'fname','mail', 'select', 'message','action'];
  dataSource = ELEMENT_DATA;
}
