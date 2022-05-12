export class Instructions {

    public static Instructions(): string {
        return ("Instruções:" +
                "\nPara vencer o jogo você precisa marcar um touchdown." +
                "\nPara marcar um touchdown você precisa avançar até a posição 100" +
                "\nVocê inicia o jogo em alguma posição entre 0 e 25."+
                "\nVocê pode fazer passes longos, médios ou curtos."+
                "\nCada passe tem uma % de ser completo ou incompleto."+
                "\nCada passe, completo ou não, consome energia."+
                "\nSe sua energia chegar a zero você perde."
        )
    }
}
