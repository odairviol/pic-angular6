import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  title = 'PIC Angular';

  nome: string;
  idade: number;

  pessoas: Pessoa[] = []

  constructor() { }

  ngOnInit() {
    this.nome = "";
    this.idade = null;
  }

  adicionar(): void {
    
  }

}
