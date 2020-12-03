import { Aleatorio } from "./Aleatorio";
import prompt from "prompt-sync";
import { Quarterback } from "./Quarterback";

let qb: Quarterback = new Quarterback("Tom Brady");

let teclado = prompt();
let option: number = 0;

while (option != 9 && qb.temEnergia()) {
    console.log("==========Marque um Touchdown!===========")
    console.log("1. Passe Longo                          |")
    console.log("2. Passe Médio                          |")
    console.log("3. Passe Curto                          |")
    console.log("4. Instruções                           |")
    console.log("8. Mostra os status                     |")
    console.log("9. Sair                                 |")
    console.log("=========================================")

    option = +teclado('Escolha uma ação: ')

    switch (option) {
        case 1:
            let comparador1: number = Aleatorio.random(1, 100);
            if (comparador1 < qb.passeLongo) {
                qb.avancoLongo();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            qb.isTD();
            if (qb.isTD() == true){
                console.log("TOUCHDOWN !!! Você venceu o jogo.")
                break;
            }
            break;
        case 2:
            let comparador2: number = Aleatorio.random(1, 100);
            if (comparador2 < qb.passeMedio) {
                qb.avancoMedio();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            qb.isTD();
            if (qb.isTD() == true) {
                console.log("TOUCHDOWN !!! Você venceu o jogo.")
                break;
            }
            break;
        case 3:
            let comparador3: number = Aleatorio.random(1, 100);
            if (comparador3 < qb.passeCurto) {
                qb.avancoCurto();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            qb.isTD();
            if (qb.isTD() == true) {
                console.log("TOUCHDOWN !!! Você venceu o jogo.")
                break;
            }
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

function instrucoes() {
    console.log("Instruções:");
    console.log("Para vencer o jogo você precisa marcar um touchdown.");
    console.log("Para marcar um touchdown você precisa avançar até a posição 100.");
    console.log("Você inicia o jogo em alguma posição entre 0 e 25.");
    console.log("Você pode fazer passes longos, médios ou curtos.");
    console.log("Cada passe tem uma % de ser completo ou incompleto.")
    console.log("Cada passe, completo ou não, consome energia.");
    console.log("Se sua energia chegar a zero você perde.");
}