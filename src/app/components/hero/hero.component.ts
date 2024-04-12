import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  initialText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis
                    beatae nihil adipisci delectus quo, vitae neque amet rerum cumque iure eius odit,
                    consequuntur, quibusdam deleniti laudantium quasi quos temporibus. ipsum dolor sit amet.
                    Sit minima maxime est distinctio illum eos enim quidem rem consequatur magni id ipsa
                    asperiores non officia sunt est adipisci voluptatem? Qui internos quia sed voluptatem
                    corrupti quo galisum enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                `;
  expandedText1 = `Non fugit excepturi id dignissimos galisum est illum eveniet rem dolor assumenda.
                    Aut consequatur repellat quo expedita eveniet et rerum amet.
                    consequuntur, quibusdam deleniti laudantium quasi quos temporibus. ipsum dolor sit amet.
                    Sit minima maxime est distinctio illum eos enim quidem rem consequatur magni id ipsa
                    asperiores non officia sunt est adipisci voluptatem? Qui internos quia sed voluptatem
                    corrupti quo galisum enim. Lorem ipsum dolor deleniti laudantium quasi quos temporibus.`;

  expandedText2 = `Ut debitis ipsum non consequatur unde qui voluptates quia qui architecto quia nam quaerat
                    rerum est corporis cumque eum velit sapiente! Aut maiores molestiae qui aliquam repudiandae eos adipisci
                    ducimus et libero nihil. Est inventore possimus sit quasi odio sed consectetur aspernatur hic internos
                    ducimus et Quis nisi. Quo maiores numquam ea molestiae quaerat aut incidunt dolor qui veniam quia vel
                    molestias iste? Cum quia soluta sit doloremque neque quo molestiae obcaecati aut numquam expedita.`;

  expandedText3 = `Et quos odio quo animi optio rem neque esse. In sunt esse et soluta commodi sed corrupti
                  quidem ut velit internos sed repellat assumenda et voluptatem Quis. Eum tempora tempore hic
                  modi architecto et suscipit saepe qui error molestias qui officia consectetur et labore aperiam.
                  Hic quisquam vitae rem molestiae aliquid qui pariatur sint hic illo delectus et porro cumque aut
                  exercitationem earum et dolorem consequuntur. Et magnam architecto quo architecto ipsa et repudiandae
                  quia vel adipisci eaque.`;

  expanded = false;

  toggleExpansion() {
    this.expanded = !this.expanded;
  }

  mostrarCriar = true;
  mostrarForm = false;
  mostrarEnviar = false;

  mostrarCriarTopico() {
    this.mostrarCriar = true;
    this.mostrarForm = false;
    this.mostrarEnviar = false;
  }

  mostrarFormTopico() {
    this.mostrarCriar = false;
    this.mostrarForm = true;
    this.mostrarEnviar = false;
  }

  mostrarEnviarTopico() {
    this.mostrarCriar = false;
    this.mostrarForm = false;
    this.mostrarEnviar = true;
  }




}
