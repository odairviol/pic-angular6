import { TelefonePipe } from './telefone.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextoPipe } from './truncate-texto.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    TelefonePipe, TruncateTextoPipe
  ],
  exports: [
    TelefonePipe, TruncateTextoPipe
  ]
})
export class PipesModule { }
