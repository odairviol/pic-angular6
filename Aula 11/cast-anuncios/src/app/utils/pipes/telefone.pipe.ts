import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valueTelefone: any, args?: any): any {
    if (valueTelefone) {
      let value = valueTelefone.toString().trim().replace(/^\+/, '');
      let ddd: number;
      let numero1: number;
      let numero2: number;

      ddd = value.slice(0, 2);

      if (value.length == 10) {
        numero1 = value.slice(2, 6);
        numero2 = value.slice(6, 10);
      } else {
        numero1 = value.slice(2, 7);
        numero2 = value.slice(7, 11);
      }
      
      return '(' + ddd + ') ' + numero1 + '-' + numero2;;
    } else {
      return "";
    }
  }

}
