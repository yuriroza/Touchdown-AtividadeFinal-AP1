
import Quarterback from "./Quarterback";
import prompt from "prompt-sync";

let qb: Quarterback = new Quarterback ('Tom Brady', 98, 92, 87, 85, Math.random()*25);


let teclado = prompt();
let option:number = 0;

while(option != 9 || qb.isTd()){
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
            qb.passarLonge();
            console.log(qb.showPosition());
            break;
        case 2:
            qb.passarMedio();
            console.log(qb.showPosition());
            break;
        case 3:
            qb.passarCurto();
            console.log(qb.showPosition());
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
console.log("Você marcou um touchdown. Venceu o jogo !")

function instrucoes () {
    console.log("Instruções:");
    console.log("Para vencer o jogo você precisa marcar um touchdown.");
    console.log("Para marcar um touchdown você precisa avançar até a posição 100.");
    console.log("Você inicia o jogo em alguma posição entre 0 e 25.");
    console.log("Você pode fazer passes longos, médios ou curtos.");
    console.log("Os passes possuem uma chance de serem completados ou não.");
    console.log("A cada passe completado você avança posições no campo.");
    console.log("Se o passe não for completado você perde o jogo.");
}
