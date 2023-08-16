
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

    addPagamento(metodoDePagamento, total){
        if (metodoDePagamento == 'dinheiro')
            return total * 0.95

        if (metodoDePagamento == 'credito')
            return total * 1.03

        return total
    } 

    verificarItem(nomeItem){
        if(this.menu.hasOwnProperty(nomeItem)){
            return true
        }
            throw  'Item inválido!'
    }

    validarPrincipal(nome){
        if(!this.carrinho.hasOwnProperty(nome)){
            throw 'Item extra não pode ser pedido sem o principal'
        }
            
    }

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

    verificaQuant(nome, quant) {
        if (quant == 0){
            throw 'Quantidade inválida!'
        }
            
        if (nome == null){
            throw 'Item inválido!'
        }
            
    }


    verificarCarrinho(metodoDePagamento, itens){
        if (!this.formaPagamento.includes(metodoDePagamento)){
            throw 'Forma de pagamento inválida!'
        }
            
        if (itens == 0){
            throw 'Não há itens no carrinho de compra!'
        }
            
    }
    
    adicionarNoCarrinho(itens){
        for (const item of itens) {
            const [nome, quant] = item.split(',')

            this.verificaQuant(nome, quant)
            
            if(this.verificarItem(nome)) {
                this.carrinho[nome] = quant
            }
        }
    }

    valorCarrinho(){
        let total = 0
        for (const item of Object.keys(this.carrinho)){
            total += this.menu[item] * this.carrinho[item]
        }
        return total
    }

    
}
const compra = new CaixaDaLanchonete().calcularValorDaCompra('dinheiro', ['cafe,1','chantily,1'])
console.log(compra)


export { CaixaDaLanchonete };