import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ciclo-vida';

  valorComponentePai: number = 10;
  visivelFilho: boolean;

  ngOnInit(): void {
    console.log("ngOnInit Pai " +this.valorComponentePai);
    this.visivelFilho = true;
  }

  mudarValor(): void {
    this.valorComponentePai++;
  }

  destruirFilho(): void {
    this.visivelFilho = !this.visivelFilho;
  }
}
