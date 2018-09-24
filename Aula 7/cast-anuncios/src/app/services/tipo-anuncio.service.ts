import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TipoAnuncio } from '../models/tipo-anuncio.model';


@Injectable({
  providedIn: 'root'
})
export class TipoAnuncioService {

  private tipoAnuncioUrl: string;

  constructor(private http: HttpClient) { 
    this.tipoAnuncioUrl = `${environment.apiBaseUrl}/tipos`;
  }

  findAll(): Observable<TipoAnuncio[]>{
    return this.http.get<TipoAnuncio[]>(this.tipoAnuncioUrl);
  }
}
