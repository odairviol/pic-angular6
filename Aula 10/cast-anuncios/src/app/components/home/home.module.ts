import { PipesModule } from './../../utils/pipes/pipes.module';
import { HomeDetalheAnuncioComponent } from './home-detalhe-anuncio/home-detalhe-anuncio.component';
import { HomeCardAnuncioComponent } from './home-card-anuncio/home-card-anuncio.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule
  ],
  declarations: [
    HomeComponent,
    HomeCardAnuncioComponent,
    HomeDetalheAnuncioComponent
  ]
})
export class HomeModule { }
