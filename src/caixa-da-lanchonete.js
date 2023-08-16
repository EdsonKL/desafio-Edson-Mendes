
// Classe para o funcionamento geral do desafio

class CaixaDaLanchonete {
    constructor(){
        this.carrinho = {}
        this.formaPagamento = ["dinheiro", "credito", "debito"]
        this.menu = {
            "cafe" : 3.00,
            "chantily" : 1.50,
            "suco" : 6.20,
            "sanduiche" : 6.50,
            "queijo" : 2.00,
            "salgado" : 7.25,
            "combo1" : 9.50,
            "combo2" : 7.50
        }
    }  

    // Metodo para calcular (dependente de outros metodos) o valor da compra

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            this.verificarCarrinho(metodoDePagamento, itens)
            this.adicionarNoCarrinho(itens)
            this.validarExtras()

            const totalCarrinho = this.valorCarrinho()
            const total = this.addPagamento(metodoDePagamento, totalCarrinho)

            return `R$ ${total.toFixed(2).replace('.', ',')}`
        } catch (error) {
            return error
        }      
    }

    // Metodo Responsavel por aumentar/diminuir o valor total da conta, baseada no metodo de pagamento

    addPagamento(metodoDePagamento, total){
        if (metodoDePagamento == 'dinheiro')
            return total * 0.95

        if (metodoDePagamento == 'credito')
            return total * 1.03

        return total
    } 

    // Metodo para validar se o item existe no menu/cardapio

    verificarItem(nomeItem){
        if(this.menu.hasOwnProperty(nomeItem)){
            return true
        }
            throw  'Item inválido!'
    }

    // Metodo para conferir se tem, o item principal, caso haja um extra

    validarPrincipal(nome){
        if(!this.carrinho.hasOwnProperty(nome)){
            throw 'Item extra não pode ser pedido sem o principal'
        }
            
    }

    // Metodo responsavel por conferir se 

    validarExtras() {
        for (const item of Object.keys(this.carrinho)) {
            if (item == "chantily") {
                this.validarPrincipal('cafe')
            } 
            if (item == "queijo") {
                this.validarPrincipal('sanduiche')
            }
        }
    }

    // Metodo para verificar se tem quantidade no itens e se o item é valido

    verificaQuant(nome, quant) {
        if (quant == 0){
            throw 'Quantidade inválida!'
        }
            
        if (nome == null){
            throw 'Item inválido!'
        }
            
    }

    // Verifica se a forma de pagamento é valida e se existe itens no carrinho

    verificarCarrinho(metodoDePagamento, itens){
        if (!this.formaPagamento.includes(metodoDePagamento)){
            throw 'Forma de pagamento inválida!'
        }
            
        if (itens == 0){
            throw 'Não há itens no carrinho de compra!'
        }
            
    }

    // Adiciona os itens no carrinho 

    adicionarNoCarrinho(itens){
        for (const item of itens) {
            const [nome, quant] = item.split(',')

            this.verificaQuant(nome, quant)
            
            if(this.verificarItem(nome)) {
                this.carrinho[nome] = quant
            }
        }
    }

    // Faz a soma do valor

    valorCarrinho(){
        let total = 0
        for (const item of Object.keys(this.carrinho)){
            total += this.menu[item] * this.carrinho[item]
        }
        return total
    }

    
}

    // Exemplo de uma compra

const compra = new CaixaDaLanchonete().calcularValorDaCompra('credito', ['cafe,2','sanduiche,1','chantily,1'])
console.log(compra)


export { CaixaDaLanchonete };