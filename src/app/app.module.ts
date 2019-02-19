import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatFactsComponent } from './home/cat-facts/cat-facts.component';
import { FactItemComponent } from './home/cat-facts/fact-item/fact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatFactsComponent,
    FactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
