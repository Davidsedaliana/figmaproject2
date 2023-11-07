import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterEvent, RouterLink, RouterModule } from '@angular/router';
import { authors } from 'src/app/models/authors';
import { JoinComponent } from 'src/app/pages/join/join.component';

@Component({
  standalone:true,
  imports:[CommonModule,RouterModule,RouterLink,JoinComponent],
  selector: 'app-listauthors',
  templateUrl: './listauthors.component.html',
  styleUrls: ['./listauthors.component.css']
})
export class ListauthorsComponent {
  @Input() item!:authors ;
}
