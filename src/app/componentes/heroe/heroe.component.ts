import { Component } from '@angular/core';
import { Heroe } from './../../clases/heroe';
import { HeroesService } from './../../servicios/heroes.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public heroe : Heroe = new Heroe();

  constructor(
    private HeroesService : HeroesService,
    private activatedRoute : ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(params=>{
      this.heroe = this.HeroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
