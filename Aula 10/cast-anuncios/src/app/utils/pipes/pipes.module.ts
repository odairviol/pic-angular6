import { TelefonePipe } from './telefone.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    TelefonePipe
  ],
  exports: [
    TelefonePipe
  ]
})
export class PipesModule { }
