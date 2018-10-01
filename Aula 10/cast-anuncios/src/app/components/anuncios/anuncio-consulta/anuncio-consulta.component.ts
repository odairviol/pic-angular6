import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../../../services/anuncio.service';
import { AnuncioFiltro } from '../../../models/anuncio-filtro.model';
import { Anuncio } from '../../../models/anuncio.model';
import { ConfirmaExclusaoComponent } from '../../../shared/confirma-exclusao/confirma-exclusao.component';

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
  
  //Atributos para modal de exclusão
  nomeAnuncio: string;
  idAnuncio: number;
  exibeExclusao: boolean = false;

  //Atributos modal visualização
  anuncioSelecionado: Anuncio;

  @ViewChild(ConfirmaExclusaoComponent) componenteExclusao: ConfirmaExclusaoComponent;

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

  public confirmaExclusao(anuncio: Anuncio): void{
    this.nomeAnuncio = anuncio.nome;
    this.idAnuncio = anuncio.id;
    this.anuncioSelecionado = anuncio;
    this.exibeExclusao = true;
    //@ViewChild instancia do componente exclusão.
    //console.log(this.componenteExclusao);
  }

  public cancelarAnuncio(mensagem: string): void {
    console.log(mensagem);
  }

  public excluirAnuncio(idExclusao: number){
    console.log(idExclusao);
    this.anuncioService.delete(idExclusao).subscribe(resultado => {
      // this.anuncioService.findAll().subscribe(resultado => {
      //   this.anuncios = resultado;
      // });

      this.anuncios.splice(this.anuncios.indexOf(this.anuncioSelecionado), 1);
      alert("Registro excluído com sucesso");
    });
  }

  public visualizar(anuncio: Anuncio): void {
    this.anuncioSelecionado = anuncio;
  }
}
