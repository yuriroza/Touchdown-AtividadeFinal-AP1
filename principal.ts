import { Aleatorio } from "./Aleatorio";
import prompt from "prompt-sync";
import { Quarterback } from "./Quarterback";
import { Instructions } from "./Instructions"

let qb: Quarterback = new Quarterback("Tom Brady");

let teclado = prompt();
let option: number = 0;

while (option != 9 && qb.temEnergia() && qb.isNotTD()) {
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
            if (Aleatorio.random(1,100) < qb.passeLongo) {
                qb.avancoLongo();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            break;
        case 2:
            if (Aleatorio.random(1, 100)< qb.passeMedio) {
                qb.avancoMedio();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            break;
        case 3:
            if (Aleatorio.random(1, 100) < qb.passeCurto) {
                qb.avancoCurto();
                qb.perdeEnergia();
            } else {
                qb.perdeEnergia();
            }
            qb.checkEnergia();
            console.log(`Você avançou até a posição: ${qb.checkPosicao().toFixed(0)}.`);
            console.log(`Você está com ${qb.energia.toFixed(0)} de energia.`);
            console.log(`Faltam ${(100 - qb.posicao).toFixed(0)} posições para vencer.`);
            break;
        case 4:
            console.log(Instructions.Instructions());
            break;
        case 8:
            console.log(qb.mostraStatus());
            break;
        case 9:
            break;
        default:
            break;
    }

    if (qb.isNotTD() == false){
        console.log("TOUCHDOWN !! Você venceu o jogo.")
    } else if (qb.temEnergia() == false){
        console.log("Você não tem energia, você perdeu o jogo !")
    }
}
