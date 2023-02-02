import { Heroe } from './../../clases/heroe';
import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  @Input() heroe : Heroe = new Heroe();
  @Input() idHeroe : any;

  constructor(
    private router : Router
  ){}

  verHeroe() : void{
    this.router.navigate(['/heroe',this.idHeroe])
  }

}
