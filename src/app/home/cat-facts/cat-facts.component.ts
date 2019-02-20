import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/model/fact';
import { Observable } from 'rxjs';
import { CatApiService } from 'src/app/services/cat-api.service';


@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {

  factList : Fact[] = [];


  //aqui tengo ya servicio del api , no se hacen funciones asincronas en el constructor
constructor(private api: CatApiService) {}


  ngOnInit() {
    console.log('trying to load');
    this.api.listCatFacts().subscribe(
      //ESTO HACE LO MISMO QUE handleData()
      (data: Fact[]) => {
        this.factList = data;
        console.log(this.factList);
      }
    );
  }

  //SIN USAR
  handleData(data: Fact[]) {
    this.factList = data;
  }

}
