import { Negociacao, NegociacaoLista } from '../models/index';
import { NegociacaoView, MensagemView } from '../views/index';
import { domInject } from '../helpers/index';

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacaoLista = new NegociacaoLista();
    private _negociacaoView = new NegociacaoView('#negociacaoView', true);
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        
        this._negociacaoView.update(this._negociacaoLista);
    }

    adiciona(event: Event): void {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));
        
        if ( !this.ehDiaUtil(data) ) {
            this._mensagemView.update('Apenas negociações no dia da semana.');
            return;
        }

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacaoLista.adiciona(negociacao);
        this._negociacaoView.update(this._negociacaoLista);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private ehDiaUtil(data: Date) {
        
        return data.getDay() !== Week.sabado && data.getDay() !== Week.domingo;
    }
}

enum Week {

    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}