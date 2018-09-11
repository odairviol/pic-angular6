import { Veiculo } from "./veiculo";
import { Motor } from "./motor";


export class Carro extends Veiculo implements Motor {

    portas: number;
    passageiros: number;

    constructor(pneu: number,
        cor: string,
        marca: string,
        portas: number, 
        passageiros: number,
        motorista?: string){

        super(pneu, cor, marca, motorista)

        this.portas = portas;
        this.passageiros = passageiros;
    }
    
    acelerar() {
        console.log("Odair acelerando o fusca");
    }    
    
    desacelerar() {
        console.log("Odair desacelerando o fusca");
    }

    alterarCorVeiculo(): void{
        this.cor = "Verde";
        console.log("Cor do veículo " + this.cor);
    }


}