import { Component, OnInit, Input } from '@angular/core';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-home-card-anuncio',
  templateUrl: './home-card-anuncio.component.html',
  styleUrls: ['./home-card-anuncio.component.css']
})
export class HomeCardAnuncioComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  imagem: any;

  constructor() { }

  ngOnInit() {
    this.imagem = this.anuncio.imagem ? this.anuncio.imagem.value : "./assets/boomerang.png";
  }

}
