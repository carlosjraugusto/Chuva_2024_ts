import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-enviar-topico',
  templateUrl: './enviar-topico.component.html',
})
export class EnviarTopicoComponent implements OnInit {

  constructor(public heroBottom: HeroComponent) { }

  ngOnInit(): void {
  }

  chamarCriarTopico() {
    this.heroBottom.mostrarFormTopico()
  }

}
