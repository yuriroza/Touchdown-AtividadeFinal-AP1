import {Aleatorio} from "./Aleatorio";
import prompt from "prompt-sync";
import {Quarterback} from "./Quarterback";

let qb: Quarterback = new Quarterback ("Tom Brady"); 

let teclado = prompt();
let option:number = 0;

while(option != 9 && qb.temEnergia()) {
    console.log("==========Marque um Touchdown!===========")
    console.log("1. Passe Longo                          |")
    console.log("2. Passe Médio                          |")
    console.log("3. Passe Curto                          |")
    console.log("4. Instruções                           |")
    console.log("8. Mostra os status                     |")
    console.log("9. Sair                                 |")
    console.log("=========================================")

    option = +teclado('Escolha uma ação: ')

    switch(option){
        case 1:
            let avancoLongo: number = qb.avancoLongo();
            qb.checkPosicao();
            let desgasteLongo: number = qb.perdeEnergia();
            console.log(`Você avançou ${avancoLongo.toFixed(0)} posições.`);
            console.log(`Você perdeu ${desgasteLongo.toFixed(0)} de energia.`);
            break;
        case 2:
            let avancoMedio: number = qb.avancoMedio();
            qb.checkPosicao();
            let desgasteMedio: number = qb.perdeEnergia();
            console.log(`Você avançou ${avancoMedio.toFixed(0)} posições.`)
            console.log(`Você perdeu ${desgasteMedio.toFixed(0)} de energia.`)
            break;
        case 3:
            let avancoCurto: number = qb.avancoMedio();
            qb.checkPosicao();
            qb.touchdown();
            let desgasteCurto: number = qb.perdeEnergia();
            console.log(`Você avançou ${avancoCurto.toFixed(0)} posições.`)
            console.log(`Você perdeu ${desgasteCurto.toFixed(0)} de energia.`)
            break;
        case 4:
            instrucoes();
            break;
        case 8:
            console.log(qb.mostraStatus());
            break;
        case 9:
            break;
        default:
            break;
    }
}
console.log("Você não tem energia, você perdeu o jogo !")

function instrucoes () {
    console.log("Instruções:");
    console.log("Para vencer o jogo você precisa marcar um touchdown.");
    console.log("Para marcar um touchdown você precisa avançar até a posição 100.");
    console.log("Você inicia o jogo em alguma posição entre 0 e 25.");
    console.log("Você pode fazer passes longos, médios ou curtos.");
    console.log("Cada passe consome energia.");
    console.log("Se sua energia chegar a zero você perde.");
}