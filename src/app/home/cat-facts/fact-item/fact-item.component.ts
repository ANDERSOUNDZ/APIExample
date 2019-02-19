import { Component, OnInit,Input } from '@angular/core';
import { Fact } from 'src/app/model/fact';

@Component({
  selector: 'app-fact-item',
  templateUrl: './fact-item.component.html',
  styleUrls: ['./fact-item.component.scss']
})
export class FactItemComponent implements OnInit {

  @Input() fact: Fact;

  constructor() { }

  ngOnInit() {
  }

}
