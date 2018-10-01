import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  anuncios: Anuncio[];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.anuncioService.findAll().subscribe(resultado => {
      this.anuncios = resultado;
    });
  }

}
