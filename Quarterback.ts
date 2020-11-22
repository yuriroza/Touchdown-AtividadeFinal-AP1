export default class quarterback {
    constructor(private _nome: string, 
        private _passeCurto: number,
        private _passeMedio: number,
        private _passeLongo: number,
        private _forca: number,
        private _posicao : number,
        ) {}
    
    public getPasseCurto(){
        return this._passeCurto
    }

    public getPasseMedio(){
        return this._passeMedio
    }

    public getPasseLongo(){
        return this._passeLongo
    }

    public getForca(){
        return this._forca
    }
    
    public getPosicao(){
        return this._posicao;
    }
    public setPosicao(posicao: number){
        this._posicao = posicao;
    }

    public mostraStatus(): string{
        return ("Jogador:" +
        "\nNome: " + 
        this._nome +
        ("\nPasse Curto: " + this._passeCurto) +
        ("\nPasse Médio: " + this._passeMedio) +
        ("\nPasse Longo: " + this._passeLongo) +
        ("\nForça: " + this._forca) +
        ("\nPosição: " + this._posicao.toFixed(0))
        );
        
    }
    
    public passarLonge (): void{
        let comparador = Math.random() * 101;
        if(comparador <= this._passeLongo){
            let avanco = this._forca / this.randomizarAvanco(6, 9);
            this._posicao += Math.floor(avanco);
        } else{
            console.log("Você errou o passe ! Perdeu o jogo")
            }
    }

    public passarMedio (): void{
        let comparador = Math.random() * 101;
        if(comparador <= this._passeMedio){
            let avanco = this._forca / this.randomizarAvanco(7, 12);
            this._posicao += Math.floor(avanco);
        } else{
            console.log("Você errou o passe ! Perdeu o jogo")
        }
    }

    public passarCurto (): void{
        let comparador = Math.random() * 101;
        if(comparador <= this._passeCurto){
            let avanco = this._forca / this.randomizarAvanco(10, 20);
            this._posicao += Math.floor(avanco);
        } else{
            console.log("Você errou o passe ! Perdeu o jogo")
        }
    }

    public showPosition (): string{
        return("Você esta na posição " + this._posicao.toFixed(0));
    }

    public isTd(): boolean {
        return this._posicao > 100;
    }

    private randomizarAvanco(fator1: number, fator2: number): number{
        return fator1 + Math.random() * (fator2 - fator1);
    }



}
