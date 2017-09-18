import { View } from './View';
import { NegociacaoLista } from '../models/NegociacaoLista';

export class NegociacaoView extends View<NegociacaoLista> {

    template(model: NegociacaoLista): string {

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${model.paraArray().map(negociacao =>
                    `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `
                ).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            <script>alert('caue')</script>
        `;
    }
}