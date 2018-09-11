import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  title = 'PIC Angular';

  pessoas: Pessoa[] = [
    new Pessoa("Odair Viol", 32),
    new Pessoa("Roberto Bob", 30),
    new Pessoa("Rodrigo Funny", 32),
    new Pessoa("Dennis Garcia", 28)
  ]

  constructor() { }

  ngOnInit() {
  }

}
