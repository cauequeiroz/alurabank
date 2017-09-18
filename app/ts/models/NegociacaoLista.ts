import { Negociacao } from './Negociacao';

export class NegociacaoLista {

    private _lista: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._lista.push(negociacao);
    }

    paraArray(): Array<Negociacao> {

        return ([] as Array<Negociacao>).concat(this._lista);
    }
}