const lista_dePecas = [{
    nomePeca: "Lanterna", 
    pesoPeca: 300, 
    quantPeca: 8
    },
{
    nomePeca: "Roda", 
    pesoPeca: 500, 
    quantPeca: 4
    },
{
    nomePeca: "Fi", 
    pesoPeca: 15, 
    quantPeca: 15
    },
{    
    nomePeca: "Retrovisor", 
    pesoPeca: 75, 
    quantPeca: 2
    },
{
    nomePeca: "Volante", 
    pesoPeca: 120, 
    quantPeca: 11
    }
]

console.log("Iniciando cadastro")
console.log("....................\n")
for (let i = 0; i < lista_dePecas.length; i++){
    let pesoPeca = 0
    let nomePeca = ""

    if (lista_dePecas[i].pesoPeca < 100) {
        console.log("Peso inferior a 100g, peca nao cadastrada: ", lista_dePecas[i].nomePeca)
    } else {
        console.log("Peso superior a 100g, peca cadastrada: ", lista_dePecas[i].nomePeca)
    }
}

console.log("....................\n")
for (let i = 0;  i < lista_dePecas.length; i++) {
    let nomePeca = ""

    if (lista_dePecas[i].nomePeca.length < 3){
        console.log("Erro no nome da peca: ", lista_dePecas[i].nomePeca)
    } else {
            console.log("Cadastro completo da peca:", lista_dePecas[i].nomePeca)
    }

}

console.log("....................\n")
for (let i = 0; i < lista_dePecas.length; i++) {
    let quantPeca = 0
    let nomePeca = ""

    if (lista_dePecas[i].quantPeca > 10) {
        console.log("Ultrapassou o limite da caixa, peca nao autorizada: ", lista_dePecas[i].nomePeca)
    } else {
        console.log("Caixa ok, peca autorizada: ", lista_dePecas[i].nomePeca)
    }
}
console.log("....................\n")
console.log("Fim do cadastro.")