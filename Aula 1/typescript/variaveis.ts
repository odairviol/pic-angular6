export class Variaveis {

   public static readonly ESCOPO_CLASSE_READONLY = "Valor readonly";

   public atributoClasse: string = "Atributo da Classe";

    printVar(): void {
        if(true) {
            var escopoFuncao = "var";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log("Print fora da função " + escopoFuncao);
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
        this.atributoClasse = "Atributo da Classe Alterado";
    }

    printLet(): void {
        if(true){
            let escopoFuncao = "let";
            console.log("Print dentro da função " + escopoFuncao);
        }
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
    }

    printConst(): void {
        const ESCOPO_FUNCAO = "Const";
        if(true){
            console.log("Print dentro da função " + ESCOPO_FUNCAO);
        }
        console.log(Variaveis.ESCOPO_CLASSE_READONLY);
    }

    printAtributoClasse(){
        console.log(this.atributoClasse);
    }

}