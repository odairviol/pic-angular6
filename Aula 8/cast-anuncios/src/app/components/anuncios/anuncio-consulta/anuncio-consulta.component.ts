import { Component, OnInit } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../../../services/anuncio.service';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { Anuncio } from '../../../models/anuncio.model';

@Component({
  selector: 'app-anuncio-consulta',
  templateUrl: './anuncio-consulta.component.html',
  styleUrls: ['./anuncio-consulta.component.css'],
  providers: [TipoAnuncioService]
})
export class AnuncioConsultaComponent implements OnInit {

  tipos: Observable<TipoAnuncio[]>;
  filtro: AnuncioFiltro;
  anuncios: Anuncio[];
  formulario: FormGroup; 

  constructor(private formBuilder: FormBuilder,
    private tipoAnuncioService: TipoAnuncioService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.tipos = this.tipoAnuncioService.findAll();
    this.anuncioService.findAll().subscribe(resultado => {
      this.anuncios = resultado;
    })
    this.createFormGroup();
  }

  private createFormGroup(): void{
    this.formulario = this.formBuilder.group({
      tipo: [null],
      nome: [null]
    });
  }

  public pesquisar(): void {
    this.filtro = JSON.parse(JSON.stringify(this.formulario.value));
    this.anuncioService.findByFiltros(this.filtro).subscribe(resultado => {
      this.anuncios = resultado;
      console.log(this.anuncios);
    })
  }
}
