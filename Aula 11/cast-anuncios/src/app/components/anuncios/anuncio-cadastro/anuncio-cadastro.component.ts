import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoAnuncio } from '../../../models/tipo-anuncio.model';
import { Observable } from 'rxjs';
import { TipoAnuncioService } from '../../../services/tipo-anuncio.service';
import { Anuncio } from '../../../models/anuncio.model';
import { AnuncioService } from '../../../services/anuncio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Imagem } from '../../../models/imagem.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-anuncio-cadastro',
  templateUrl: './anuncio-cadastro.component.html',
  styleUrls: ['./anuncio-cadastro.component.css']
})
export class AnuncioCadastroComponent implements OnInit {

  tipos: Observable<TipoAnuncio[]>;
  formulario: FormGroup;
  anuncio: Anuncio;
  imagem: Imagem;

  id: any;
  labelButton: string = "Salvar";

  @ViewChild('inputFile') componenteImagem: ElementRef;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tipoAnuncioService: TipoAnuncioService,
    private anuncioService: AnuncioService) { }

  ngOnInit() {
    //Carregando combo tipos de anúncio
    this.tipos = this.tipoAnuncioService.findAll();
    this.createFormGroup();

    this.activateRoute.params.subscribe(parametrosUrl => {
      this.id = parametrosUrl['id'];
      if (this.id != undefined) {
        this.labelButton = "Alterar";
        this.anuncioService.findById(this.id).subscribe(data => {
          this.anuncio = data[0];
          this.imagem = this.anuncio.imagem;
          this.updateValuesFormControl();
        });
      }
    });

  }

  public updateValuesFormControl(): void {
    // this.formulario.setValue({
    //   tipo: this.anuncio.tipo,
    //   nome: this.anuncio.nome,
    //   descricao: this.anuncio.descricao,
    //   valor: this.anuncio.valor,
    //   contato: this.anuncio.contato
    // });

    Object.keys(this.anuncio).forEach(atributo => {
      if (this.formulario.get(atributo)) {
        this.formulario.get(atributo).setValue(this.anuncio[atributo]);
      }
    })
  }

  public createFormGroup(): void {
    //Criando formulário reativo
    this.formulario = this.formBuilder.group({
      id: [null],
      tipo: [null, Validators.required],
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      valor: [null, Validators.required],
      contato: [null, Validators.required],
      destaque: [false]
    });
  }

  public campoValido(campo: string): boolean {
    let formControl = this.formulario.get(campo);
    if (campo.toLocaleUpperCase() == "TIPO") {
      return formControl.value == "null" && (formControl.touched || formControl.dirty);
    } else {
      return formControl.invalid && (formControl.touched || formControl.dirty);
    }
  }

  public onSelectFile(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        console.log(file.name, reader.result);
        this.imagem = new Imagem(file.name, reader.result);
      }
    }
  }

  public salvar(): void {
    //@viewChild para obter referência input-file
    //console.log(this.componenteImagem.nativeElement.files);

    if (this.formulario.valid) {

      this.anuncio = JSON.parse(JSON.stringify(this.formulario.value));
      //this.anuncio.id = this.id;
      this.anuncio.imagem = this.imagem;

      if (this.id == undefined) {
        //Inclusão de anúncios na api
        this.anuncioService.insert(this.anuncio).subscribe(resultado => {
          this.anuncio = JSON.parse(JSON.stringify(resultado));
          alert("Anúncio salvo com sucesso " + this.anuncio.nome);
          this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
        });
      } else {
        //Alteração de anúncios na api
        console.log(this.anuncio);
        this.anuncioService.update(this.anuncio).subscribe(resultado => {
          alert("Anúncio alterado com sucesso " + this.anuncio.nome);
          this.router.navigate([Constants.PATH_CONSULTA_ANUNCIO]);
        });
      }
    } else {
      alert("Formulário inválido, verifique os campos.");
    }
  }

}
