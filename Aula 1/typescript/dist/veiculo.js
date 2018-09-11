"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo(pneu, cor, marca, motorista) {
        this.pneu = pneu;
        this.cor = cor;
        this.marca = marca;
        this.motorista = motorista;
    }
    Veiculo.prototype.alterarCorVeiculo = function () {
        console.log("Cor " + this.cor);
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
//# sourceMappingURL=veiculo.js.map