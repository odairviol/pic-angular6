"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculo {
    constructor(motorista, cor) {
        super(2, cor, "Honda", motorista);
        this.motorista = motorista;
        this.cor = cor;
    }
    acelerar() {
        console.log("Odair acelerando a moto");
    }
    desacelerar() {
        console.log("Odair desacelerando a moto");
    }
    obterMarca() {
        return this.marca;
    }
}
exports.Moto = Moto;
