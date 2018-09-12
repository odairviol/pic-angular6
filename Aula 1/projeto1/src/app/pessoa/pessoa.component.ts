import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  title = 'PIC Angular';

  pessoas: Pessoa[] = []

  constructor() { }

  ngOnInit() {
  }

}
