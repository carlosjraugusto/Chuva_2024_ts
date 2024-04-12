import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HeroComponent } from './components/hero/hero.component';

import { FormTopicoComponent } from './components/form-topico/form-topico.component';
import { BottomPostsComponent } from './components/bottom-posts/bottom-posts.component';
import { CriarTopicoComponent } from './components/criar-topico/criar-topico.component';
import { EnviarTopicoComponent } from './components/enviar-topico/enviar-topico.component';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    HeroComponent,
    CriarTopicoComponent,
    FormTopicoComponent,
    EnviarTopicoComponent,
    BottomPostsComponent



  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
