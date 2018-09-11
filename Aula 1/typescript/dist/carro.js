"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    constructor(pneu, cor, marca, portas, passageiros, motorista) {
        super(pneu, cor, marca, motorista);
        this.portas = portas;
        this.passageiros = passageiros;
    }
    acelerar() {
        console.log("Odair acelerando o fusca");
    }
    desacelerar() {
        console.log("Odair desacelerando o fusca");
    }
    alterarCorVeiculo() {
        this.cor = "Verde";
        console.log("Cor do veículo " + this.cor);
    }
}
exports.Carro = Carro;
