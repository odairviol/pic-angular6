import { Component, OnInit } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {

  tiposAnuncio: Observable<TipoAnuncio[]>;

  constructor(private tipoAnuncioService: TipoAnuncioService) { }

  ngOnInit() {
    this.tiposAnuncio = this.tipoAnuncioService.findAll();
  }

}
