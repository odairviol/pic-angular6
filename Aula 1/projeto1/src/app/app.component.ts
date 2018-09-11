import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIC Angular';

  pessoas: Pessoa[] = [
    new Pessoa("Odair Viol", 32),
    new Pessoa("Roberto Bob", 30),
    new Pessoa("Rodrigo Funny", 32),
    new Pessoa("Dennis Garcia", 28)
  ]

}
