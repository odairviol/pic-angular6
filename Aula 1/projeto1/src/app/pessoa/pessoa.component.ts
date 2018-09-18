import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  title = 'PIC Angular';

  pessoa: Pessoa;
  pessoas: Array<Pessoa> = []

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa("", null);
  }

  adicionar(): void {
    this.pessoas.push(this.pessoa);
    console.log("Adicionado " + this.pessoa.nome);
    this.ngOnInit();
  }

  excluirPorObjeto(pessoa: Pessoa): void {
    console.log("Me excluiu " + pessoa.nome);
    let index = this.pessoas.indexOf(pessoa);
    this.pessoas.splice(index, 1);
  }

  excluirPorIndex(index: number){
    console.log(index);
    this.pessoas.splice(index, 1);
  }

}
