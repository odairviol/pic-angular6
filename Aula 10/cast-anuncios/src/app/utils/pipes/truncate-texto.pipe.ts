import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateTexto'
})
export class TruncateTextoPipe implements PipeTransform {

  transform(texto: string, limite: number): any {
    if(texto.length > limite) {
      return texto.substr(0, limite) + '...';
    }
    return texto;
  }

}
