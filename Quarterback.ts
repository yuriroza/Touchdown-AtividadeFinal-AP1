import { Personagem } from "./Personagem";
import { Aleatorio } from "./Aleatorio";

export class Quarterback extends Personagem {
    private _posicao: number;
    private _energia: number;

    constructor(nome: string) {
        super(nome);

        this._posicao = Aleatorio.random(1, 25);
        this._energia = 50;
    }

    public get nome(): string {
        return this._nome;
    }

    public get passeCurto(): number {
        return this._passeCurto;
    }

    public get passeMedio(): number {
        return this._passeMedio;
    }

    public get passeLongo(): number {
        return this._passeLongo;
    }

    public get forca(): number {
        return this._forca;
    }

    public get posicao(): number {
        return this._posicao;
    }

    public get energia(): number {
        return this._energia;
    }

    public set posicao(posicao: number) {
        this._posicao = posicao;
    }

    public set energia(energia: number) {
        this._energia = energia;
    }


    public mostraStatus(): string {
        return ("Jogador" +
            "\nNome:" + this.nome +
            ("\nPasse Curto: " + this._passeCurto.toFixed(0)) +
            ("\nPasse Médio: " + this._passeMedio.toFixed(0)) +
            ("\nPasse Longo: " + this._passeLongo.toFixed(0)) +
            ("\nForça: " + this._forca.toFixed(0)) +
            ("\nPosição: " + this._posicao.toFixed(0) +
            "\nEnergia: " + this._energia.toFixed(0))
        )
    }

    public avancoLongo(): number {
        let avanco = this.forca / Aleatorio.random(7, 12);
        this.posicao = this.posicao + avanco;
        return avanco;
    }

    public avancoMedio(): number {
        let avanco = this.forca / Aleatorio.random(9, 14);
        this.posicao = this.posicao + avanco;
        return avanco;
    }

    public avancoCurto(): number {
        let avanco = this.forca / Aleatorio.random(11, 20);
        this.posicao = this.posicao + avanco;
        return avanco;
    }

    public perdeEnergia(): number {
        let perda = Aleatorio.random(1, 5);
        this.energia = this.energia - perda;
        return perda;
    }

    public checkEnergia(): void {
        if (this.energia < 0) {
            this.energia = 0;
        }
    }

    public temEnergia(): boolean {
        if (this.energia > 0) {
            return true;
        } else {
            return false;
        }
    }

    public checkPosicao(): number {
        if (this.posicao > 100) {
            this.posicao = 100;
        }
        return this.posicao;
    }

    public isNotTD(): boolean{
        if (this.posicao < 100){
            return true;
        } else {
            return false;
        }
    }
    
}