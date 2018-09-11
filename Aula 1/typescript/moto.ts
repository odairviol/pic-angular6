import { Veiculo } from "./veiculo";
import { Motor } from "./motor";

export class Moto extends Veiculo implements Motor {

    constructor(
        public motorista: string,
        public cor: any){
            super(2, cor, "Honda", motorista);
        }

    acelerar() {
        console.log("Odair acelerando a moto");
    }    
    
    desacelerar() {
        console.log("Odair desacelerando a moto");
    }

    obterMarca(): string {
        return this.marca;
    }


}