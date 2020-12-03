import {Aleatorio} from "./Aleatorio";

export class Personagem {
    protected _nome : string;
    protected _passeCurto: number;
    protected _passeMedio: number;
    protected _passeLongo: number;
    protected _forca: number;

    constructor (nome: string){
        this._nome = nome;   
        this._passeCurto = Aleatorio.random(90, 98);
        this._passeMedio = Aleatorio.random(88, 96);
        this._passeLongo = Aleatorio.random(86, 94);
        this._forca = Aleatorio.random(80, 85);
    }

}