"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Variaveis {
    constructor() {
        this.atributoClasse = "Atributo da Classe";
    }
    printVar() {
        if (true) {
            var escopoFuncao = "var";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log("Print fora da função " + escopoFuncao);
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
        this.atributoClasse = "Atributo da Classe Alterado";
    }
    printLet() {
        if (true) {
            let escopoFuncao = "let";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
    }
    printConst() {
        const ESCOPO_FUNCAO = "Const";
        if (true) {
            console.log("Print dentro da função " + ESCOPO_FUNCAO);
        }
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
    }
    printAtributoClasse() {
        console.log(this.atributoClasse);
    }
}
Variaveis.ESCOPO_CLASSE_READONLY = "Valor readonly";
exports.Variaveis = Variaveis;
