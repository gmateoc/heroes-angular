import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.service';
import { Heroe } from './../../clases/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{

  heroes : Heroe[] = [];
  termino : string = "";

  constructor(
    private heroesService : HeroesService,
    private activatedRoute : ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }
}
