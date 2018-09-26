import { Component, OnInit, Input } from '@angular/core';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-home-card-anuncio',
  templateUrl: './home-card-anuncio.component.html',
  styleUrls: ['./home-card-anuncio.component.css']
})
export class HomeCardAnuncioComponent implements OnInit {

  @Input("anuncio") anuncio: Anuncio;

  constructor() { }

  ngOnInit() {
    //console.log(this.anuncio);
  }

}
