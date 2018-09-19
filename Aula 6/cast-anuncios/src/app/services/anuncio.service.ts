import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from '../models/anuncio.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anuncioUrl: string;

  //Injeção de dependência do HttpCliente para
  //consumo de APIs rest.
  constructor(private http: HttpClient) { 
    this.anuncioUrl = `${environment.apiBaseUrl}/anuncios`;
  }

  //Insert de anúncios com método POST
  public insert(anuncio: Anuncio): Observable<HttpResponse<Anuncio>>{
    let body = JSON.stringify(anuncio);
    let httpHeaders = 
        new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post<Anuncio>(
      this.anuncioUrl, 
      body, { headers : httpHeaders, observe: 'response'
      });    
  } 
}
