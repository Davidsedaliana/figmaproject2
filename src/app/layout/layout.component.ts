import { Component } from '@angular/core';
import { FooterComponent } from '../footer and header/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../footer and header/header/header.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  imports:[CommonModule,HeaderComponent,RouterLink,RouterModule,RouterOutlet,FooterComponent],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {

}
