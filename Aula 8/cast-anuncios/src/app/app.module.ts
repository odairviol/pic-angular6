import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {NgxMaskModule} from 'ngx-mask'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AnuncioConsultaComponent } from './components/anuncios/anuncio-consulta/anuncio-consulta.component';
import { AnuncioCadastroComponent } from './components/anuncios/anuncio-cadastro/anuncio-cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import ErrorHttpInterceptor from './utils/interceptors/error-http-interceptor';

//Configurando o locale pt-BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    AnuncioConsultaComponent,
    AnuncioCadastroComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    },
    { 
      provide: LOCALE_ID, 
      useValue: 'pt-BR' 
    }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
