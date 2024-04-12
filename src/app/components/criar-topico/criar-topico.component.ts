import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',

})
export class CriarTopicoComponent implements OnInit {

  constructor( public heroBottom: HeroComponent ) { }

  chamarMostrarForm() {
    this.heroBottom.mostrarFormTopico()
  }

  ngOnInit(): void {
  }



}
