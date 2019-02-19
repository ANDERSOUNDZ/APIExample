import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatFactsComponent } from './home/cat-facts/cat-facts.component';
import { FactItemComponent } from './home/cat-facts/fact-item/fact-item.component';

const routes: Routes = [
  {
    path: '',
  redirectTo: 'cat-facts',
  pathMatch: 'full'}
  ,
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'cat-facts',
    component: CatFactsComponent
  }
  ,
  {
    path: 'fact-item',
    component: FactItemComponent
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
