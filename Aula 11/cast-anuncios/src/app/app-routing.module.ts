import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const ROTAS: Routes = [
  //localhost:4200/
  { path: '', loadChildren: './components/home/home.module#HomeModule'},
  { path: 'anuncios', loadChildren: './components/anuncios/anuncio.module#AnuncioModule'},
  { path: '**', component: NotfoundComponent}

] 


@NgModule({
  imports: [ RouterModule.forRoot(ROTAS)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
