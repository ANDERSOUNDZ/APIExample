import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 

  MatCardModule,
  MatDividerModule,
  MatIconModule 

} from '@angular/material';


import {
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MaterialsModule { }
