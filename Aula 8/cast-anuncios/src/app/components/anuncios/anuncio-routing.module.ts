import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';

const routes: Routes = [
  //localhost:4200/anuncios/
  { path: '', 
        children: [ 
            { path: '', component: AnuncioConsultaComponent },
            //localhost:4200/anuncios/add
            { path: 'add', component: AnuncioCadastroComponent },
            //localhost:4200/anuncios/edit/id
            { path: 'edit/:id', component: AnuncioCadastroComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule { }
