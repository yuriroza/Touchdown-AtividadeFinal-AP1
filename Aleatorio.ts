export class Aleatorio {
    public static random(fator1: number, fator2: number): number{
        return fator1 + Math.random() * (fator2 - fator1);
    }
}