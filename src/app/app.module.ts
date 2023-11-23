import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Route, RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { authGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import{MatInputModule} from '@angular/material/input';
import { CategoryTableComponent } from './category-table/category-table.component';
import { AuthorsTableComponent } from './authors-table/authors-table.component';
import { AllpostsTableComponent } from './allposts-table/allposts-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminGuard } from './guards/admin.guard';

import { ContactUsTableComponent } from './contact-us-table/contact-us-table.component';


const routes: Route[] = [ 
{
  path:'',
  component:LayoutComponent,
  
  children:[
    
    {
      path: '',
      component: HomeComponent,
      title:'home'
    },
    {
      path:'',
      pathMatch:'full',
      redirectTo:'home'
    },
    {
      path: 'categories/:category',
      loadComponent: () => import('./pages/business/business.component').then(m => m.BusinessComponent)
    },

    {
      path: 'startup',
      loadComponent: ()=>import('./pages/startup/startup.component').then(m=>m.StartupComponent)
    },
    {
      path: 'blog/business',
      loadComponent: ()=>import('./pages/business/business.component').then(m=>m.BusinessComponent)
    },
    {
      path: 'category/business',
      loadComponent: ()=>import('./pages/business/business.component').then(m=>m.BusinessComponent)
    },
    {
      path: 'about-us/blog',
      loadComponent: ()=>import('./pages/blog/blog.component').then(m=>m.BlogComponent)

    },
    {
      path: 'about-us/blog/:id',
      loadComponent: ()=>import('./pages/blog/blog.component').then(m=>m.BlogComponent)

    },
    {
      path: 'startup/step-by',
      loadComponent: ()=>import('./pages/step-by-step-guide/step-by-step-guide.component').then(m=>m.StepByStepGuideComponent)
    },
    {
      path: 'startup/step-by/:id',
      loadComponent: ()=>import('./pages/step-by-step-guide/step-by-step-guide.component').then(m=>m.StepByStepGuideComponent)
    },
    {
      path: 'blog',
      loadComponent: ()=>import('./pages/blog/blog.component').then(m=>m.BlogComponent)
    },
    {
      path: 'blog/:id',
      loadComponent: ()=>import('./pages/blog/blog.component').then(m=>m.BlogComponent),
      pathMatch:'full'
    },
    {
      path: 'privacy-policy',
      loadComponent: ()=>import('./pages/privacy-policy/privacy-policy.component').then(m=>m.PrivacyPolicyComponent)

    },
    {
      path: 'about-us',
      loadComponent: ()=>import('./pages/about-us/about-us.component').then(m=>m.AboutUsComponent),

    },
    {
      path: 'contact-us',
      loadComponent: ()=>import('./pages/contact-us/contact-us.component').then(m=>m.ContactUsComponent)

    },
  ]
},

{
  path:'auth',
  loadComponent: ()=>import('./auth/auth.component').then(m=>m.AuthComponent),
  canActivate:[authGuard]
},
{
  path:'admin',
  loadComponent:()=>import('./admin-layout/admin-layout.component').then(m=>m.AdminLayoutComponent),
  canActivateChild:[adminGuard],
  children:[
    {
      path:'dashboard',
      loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent)
    },
    {
      path:'category',
      loadComponent:()=>import('./category-table/category-table.component').then(m=>m.CategoryTableComponent)
    },
    {   
      path:'authors',
      loadComponent:()=>import('./authors-table/authors-table.component').then(m=>m.AuthorsTableComponent)
    
    },
    {   
      path:'allposts',
      loadComponent:()=>import('./allposts-table/allposts-table.component').then(m=>m.AllpostsTableComponent)
    
    },
    {
      path:'contactUsTable',
      loadComponent:()=>import('./contact-us-table/contact-us-table.component').then(m=>m.ContactUsTableComponent)
    }
  ]
  
},
{
  path: '**',
  component:PageNotFoundComponent
},



   
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    BrowserAnimationsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
