class NegociacoesView {
    constructor(seletor) {
        this._seletor = document.querySelector(seletor);
    }
    update(negociacoes) {
        this._seletor.innerHTML = this.template(negociacoes);
    }
    template(negociacoes) {
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
                ${negociacoes.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>     
        `;
    }
}
