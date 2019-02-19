import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/model/fact';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {

  factList : Fact[] = [];

  constructor() { }

  ngOnInit() {
  }

}
