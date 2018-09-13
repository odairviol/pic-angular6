import { Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit,
  OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() valorComponenteFilho: number;

  valorDigitado: string;

  constructor() { }

  ngOnChanges(): void {
    console.log("ngOnchanges componente filho:" + this.valorComponenteFilho);
    this.valorComponenteFilho = this.valorComponenteFilho + this.valorComponenteFilho;
  }

  ngOnInit() {
    console.log("ngOnInit" + this.valorComponenteFilho);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck escutando alteração " + this.valorDigitado);
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked escutando alteração " + this.valorDigitado);
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked escutando alteração " + this.valorDigitado);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Me destruiu :( " + this.valorComponenteFilho);
  }

}
