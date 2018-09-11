"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(pneu, cor, marca, motorista) {
        this.pneu = pneu;
        this.cor = cor;
        this.marca = marca;
        this.motorista = motorista;
    }
    alterarCorVeiculo() {
        console.log("Cor " + this.cor);
    }
}
exports.Veiculo = Veiculo;
