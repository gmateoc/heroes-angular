import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router : Router
  ){}

  buscarHeroe(termino : string) : void{
    this.router.navigate(['/buscar', termino]);
  }
}
