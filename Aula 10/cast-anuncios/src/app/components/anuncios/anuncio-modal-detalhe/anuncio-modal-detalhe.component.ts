import { Anuncio } from './../../../models/anuncio.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anuncio-modal-detalhe',
  templateUrl: './anuncio-modal-detalhe.component.html',
  styleUrls: ['./anuncio-modal-detalhe.component.css']
})
export class AnuncioModalDetalheComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  constructor() { }

  ngOnInit() {
  }

}
