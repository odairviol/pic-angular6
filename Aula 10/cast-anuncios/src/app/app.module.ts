import { PipesModule } from './utils/pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import ErrorHttpInterceptor from './utils/interceptors/error-http-interceptor';

//Configurando o locale pt-BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
