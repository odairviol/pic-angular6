import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from '../models/anuncio.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AnuncioFiltro } from '../models/anuncio-filtro.model';

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
  // public insert(anuncio: Anuncio): Observable<HttpResponse<Anuncio>>{
  //   let body = JSON.stringify(anuncio);
  //   let httpHeaders = 
  //       new HttpHeaders({ 'Content-Type': 'application/json'});
  //   return this.http.post<Anuncio>(
  //     this.anuncioUrl, 
  //     body, { headers : httpHeaders, observe: 'response'
  //     });    
  // } 

  public insert(anuncio: Anuncio): Observable<Object> {
    return this.http.post(this.anuncioUrl, anuncio);
  }

  public update(anuncio: Anuncio): Observable<Object> {
    console.log(anuncio)
    return this.http.put<Anuncio>(this.anuncioUrl + `/${anuncio.id}`, anuncio);
  }

  public delete(id: number): Observable<Object> {
    return this.http.delete(this.anuncioUrl + `/${id}`);
  }

  findByFiltros(filtro: AnuncioFiltro): Observable<Anuncio[]> {
    console.log(filtro);
    if (filtro.tipo != "null" && filtro.nome != null) {
      return this.http.get<Anuncio[]>(this.anuncioUrl +
        "?tipo=" + filtro.tipo + "&nome_like=" + filtro.nome);
    } else if (filtro.tipo != "null") {
      return this.http.get<Anuncio[]>(this.anuncioUrl + "?tipo=" + filtro.tipo);
    } else {
      return this.http.get<Anuncio[]>(this.anuncioUrl + "?nome_like=" + filtro.nome);
    }
  }

  public findAll(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.anuncioUrl);
  }

  public findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(this.anuncioUrl + "?id=" + id);
  }

  public findByNome(texto: string): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.anuncioUrl + "?nome_like=" + texto);
  }
}
