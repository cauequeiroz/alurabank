class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    private _negociacaoLista = new NegociacaoLista();
    private _negociacaoView = new NegociacaoView('#negociacaoView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');

        this._negociacaoView.update(this._negociacaoLista);
    }

    adiciona(event: Event): void {

        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacaoLista.adiciona(negociacao);
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}