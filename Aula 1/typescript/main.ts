import { Carro } from "./carro";
import { Moto } from "./moto";

let fusca = new Carro(4, "Prata", "Volkswagem", "Odair", 4, 2);
fusca.acelerar();
fusca.desacelerar();
fusca.alterarCorVeiculo();

const motinha = new Moto("Odair", "Vermelha");
motinha.acelerar();
motinha.alterarCorVeiculo();
console.log(motinha.obterMarca());
motinha.desacelerar();