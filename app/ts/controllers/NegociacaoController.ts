class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;

    private _negociacaoLista = new NegociacaoLista();
    private _negociacaoView = new NegociacaoView('#negociacaoView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacaoView.update(this._negociacaoLista);
    }

    adiciona(event: Event): void {

        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacaoLista.adiciona(negociacao);
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}