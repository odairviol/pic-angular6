import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { Anuncio } from '../../../models/anuncio.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  tipos: Observable<TipoAnuncio[]>;
  formulario: FormGroup;
  anuncio: Anuncio;

  constructor(private formBuilder: FormBuilder,
    private tipoAnuncioService: TipoAnuncioService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    //Carregando combo tipos de anúncio
    this.tipos = this.tipoAnuncioService.findAll();

    //Criando formulário reativo
    this.formulario = this.formBuilder.group({
      tipo: [null, Validators.required],
      nome: [null,Validators.required ],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      contato: [null, Validators.required]
    });
    console.log(this.formulario);
  }

  public salvar(): void {
    this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
    
    //Inclusão de anúncios na api
    this.anuncioService.insert(this.anuncio).subscribe(resultado => {
      this.anuncio = JSON.parse(JSON.stringify(resultado));
      console.log("Anúncio salvo com sucesso " + this.anuncio.nome); 
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      if(err != null){
        if(err.status >= 400 && err.status <= 499){
          alert("Erro no cliente! Verifique a URL da API");
        } else if (err.status >= 500 && err.status <= 505){
          alert("Ocorreu um erro no lado do servidor");
        }else{
          alert("Erro não identificado");
        }
      }
    });
  }

}
