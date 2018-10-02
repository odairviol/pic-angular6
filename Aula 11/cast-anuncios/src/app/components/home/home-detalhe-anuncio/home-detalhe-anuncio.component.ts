import { Anuncio } from './../../../models/anuncio.model';
import { AnuncioService } from './../../../services/anuncio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detalhe-anuncio',
  templateUrl: './home-detalhe-anuncio.component.html',
  styleUrls: ['./home-detalhe-anuncio.component.css']
})
export class HomeDetalheAnuncioComponent implements OnInit {

  anuncio: Anuncio;

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(parametrosUrl => {
        this.anuncioService.findById(parametrosUrl['id']).subscribe(data => {
          this.anuncio = data[0];
        });
      });
  }

}
