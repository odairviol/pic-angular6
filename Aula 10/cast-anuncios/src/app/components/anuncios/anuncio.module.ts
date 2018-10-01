import { PipesModule } from './../../utils/pipes/pipes.module';
import { TelefonePipe } from './../../utils/pipes/telefone.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnuncioRoutingModule } from './anuncio-routing.module';
import { AnuncioConsultaComponent } from './anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './anuncio-cadastro/anuncio-cadastro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmaExclusaoModule } from '../../shared/confirma-exclusao/confirma-exclusao.module';
import { AnuncioModalDetalheComponent } from './anuncio-modal-detalhe/anuncio-modal-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AnuncioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    ConfirmaExclusaoModule,
    PipesModule
  ],
  declarations: [
    AnuncioConsultaComponent,
    AnuncioCadastroComponent,
    AnuncioModalDetalheComponent
  ]
})
export class AnuncioModule { }
