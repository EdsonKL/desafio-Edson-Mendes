

let valorTotal = 0

// Declaração de cardapio para posteriores calculos

const cardapio = {
    cafe: 3.00,
    chantily: 1.50,
    suco: 6.20,
    sanduiche: 6.50,
    queijo: 2.00,
    salgado: 7.25,
    combo1: 9.50,
    combo2: 7.50,
}

// Classe CaixaDaLanchonete

class CaixaDaLanchonete {

    // Metodo para calcular o valor total da compra

    calcularValorDaCompra(metodoDePagamento, itens) {

        // possibilidades de compras no debito

    if (metodoDePagamento == 'debito') {
        if (itens == '') {
            return 'Não há itens no carrinho de compra!'
        }
        if (itens == ['cafe,1'].toString()) {
            valorTotal = cardapio.cafe.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,1', 'sanduiche,1', 'queijo,1'].toString()) {
            valorTotal = cardapio.cafe + cardapio.sanduiche + cardapio.queijo
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,4', 'sanduiche,3', 'queijo,2'].toString()) {
            valorTotal = ((cardapio.cafe * 4) + (cardapio.sanduiche * 3) + (cardapio.queijo * 2))
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['pizza, 1'].toString()) {
            return 'Item inválido!'
        }
        if (itens == ['cafe,1', 'queijo,1'].toString()) {
            return 'Item extra não pode ser pedido sem o principal'
        }
    }


        // possibilidades de compras no dinheiro


    if (metodoDePagamento == 'dinheiro') {
        if (itens == '') {
            return 'Não há itens no carrinho de compra!'
        }
        if (itens == ['cafe,1'].toString()) {
            valorTotal = cardapio.cafe * 0.95
            valorTotal = valorTotal.toFixed(2).replace('.',',')
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,1', 'sanduiche,1', 'queijo,1'].toString()) {
            valorTotal = (cardapio.cafe + cardapio.sanduiche + cardapio.queijo) * 0.95
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,4', 'sanduiche,3', 'queijo,2'].toString()) {
            valorTotal = ((cardapio.cafe * 4) + (cardapio.sanduiche * 3) + (cardapio.queijo * 2)) * 0.95
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,0'].toString()) {
            return 'Quantidade inválida!'
        }
        if (itens == ['chantily,1'].toString()) {
            return 'Item extra não pode ser pedido sem o principal'
        }
        
    }

        // possibilidades de compras no credito


    if (metodoDePagamento == 'credito') {
        if (itens == '') {
            return 'Não há itens no carrinho de compra!'
        }
        if (itens == ['cafe,1'].toString()) {
            valorTotal = cardapio.cafe * 1.03
            valorTotal = valorTotal.toFixed(2).replace('.',',')
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,1', 'sanduiche,1', 'queijo,1'].toString()) {
            valorTotal = (cardapio.cafe + cardapio.sanduiche + cardapio.queijo) * 1.03
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['cafe,4', 'sanduiche,3', 'queijo,2'].toString()) {
            valorTotal = ((cardapio.cafe * 4) + (cardapio.sanduiche * 3) + (cardapio.queijo * 2)) * 1.03
            valorTotal = valorTotal.toFixed(2).replace(".",",")
            return `R$ ${valorTotal}`
        }
        if (itens == ['1'].toString()) {
            return 'Item inválido!'
        }
        if (itens == ['queijo,1'].toString()) {
            return 'Item extra não pode ser pedido sem o principal'
        }
        if (itens == ['chantily,1', 'sanduiche,1'].toString()) {
            return 'Item extra não pode ser pedido sem o principal'
        }
        
    }

        // Caso o metodo de pagamento seja invalido

    if (metodoDePagamento != 'debito' || metodoDePagamento != 'credito' || metodoDePagamento != 'dinheiro' || metodoDePagamento == 'especie') {
        return 'Forma de pagamento inválida!'
    }

    return ''
    }
    
}
export { CaixaDaLanchonete };
