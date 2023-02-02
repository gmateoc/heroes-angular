import { Heroe } from './../../clases/heroe';

import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes : Heroe[] = [];

  constructor(
    private heroeService : HeroesService
  ){}

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes();
    console.log(this.heroes);
  }
}
