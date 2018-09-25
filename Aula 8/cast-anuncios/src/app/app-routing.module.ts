import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnuncioConsultaComponent } from './components/anuncios/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './components/anuncios/anuncio-cadastro/anuncio-cadastro.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const ROTAS: Routes = [
  //localhost:4200/
  { path: '', component: HomeComponent },
  //localhost:4200/anuncios/
  { path: 'anuncios', 
        children: [ 
            { path: '', component: AnuncioConsultaComponent },
            //localhost:4200/anuncios/add
            { path: 'add', component: AnuncioCadastroComponent },
            //localhost:4200/anuncios/edit/id
            { path: 'edit/:id', component: AnuncioCadastroComponent }
        ]
  },
  { path: '**', component: NotfoundComponent}

] 


@NgModule({
  imports: [ RouterModule.forRoot(ROTAS)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
