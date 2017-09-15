class NegociacaoLista {

    private _lista: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._lista.push(negociacao);
    }

    paraArray(): Array<Negociacao> {

        return [].concat(this._lista);
    }
}