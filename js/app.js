let vTotal = 0;
limpar ();
document.getElementById ('lista-produtos').innerHTML = ('');
document.getElementById ('valor-total').innerHTML = `R$0`;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split ('-')[0];
    let valorUnitario = produto.split ('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    let valorFinal = valorUnitario * quantidade ;
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<span class="texto-azul">${quantidade}</span>${nomeDoProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
    vTotal = vTotal + valorFinal;
    let valorTotal = document.getElementById ('valor-total');

    valorTotal.textContent = `R$${valorFinal}`;
    document.getElementById('quantidade').value = '0';
}


function limpar(){
    document.getElementById ('lista-produtos').innerHTML = ('');
    document.getElementById ('valor-total').innerHTML = `R$0`;
    
}