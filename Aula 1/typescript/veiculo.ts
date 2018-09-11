export class Veiculo {

    constructor(
        public pneu:number, 
        public cor:string, 
        public marca:string, 
        public motorista?:string
        ){}

    alterarCorVeiculo(): void{
        console.log("Cor " + this.cor);
    }    
}