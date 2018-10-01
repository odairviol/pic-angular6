import { HomeDetalheAnuncioComponent } from './home-detalhe-anuncio/home-detalhe-anuncio.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROTAS_HOME: Routes = [
  
  //localhost:4200/
  { path: '', 
      children: [ 
        { path: '', component: HomeComponent },
        //localhost:4200/view
        { path: 'view/:id', component: HomeDetalheAnuncioComponent }
    ] 
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROTAS_HOME)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
