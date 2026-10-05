// para ajustar a largura dos resultados a largura dos botoes

const teclas = document.querySelectorAll('button')
let largura = teclas.clientWidth
let resultado_div = document.querySelector('.resultado')

function larguraResultado (){
    resultado_div.style.width = largura + 'px'
}

// botoes de valores numericos funcionais

butaoValores = document.querySelectorAll(".valor")
let resultado = document.getElementById("resultado")
let botaoPonto = document.getElementById("ponto")
let ponto = 0
let igualdade = 0

butaoValores.forEach(botao => {
    botao.addEventListener('click', function(event) {
        let valores = event.target.value
        let olhar = resultado.innerText
        
        if (olhar == 0 && valores != "." && olhar != "0.") {
            resultado.innerText = valores
            }
        else if (ponto == 1 && valores == ".") {
            false

        } else {
            resultado.innerText += `${valores}`
        }
        
    })

})

botaoPonto.addEventListener("click", () => {
    if(ponto == 0)
        ponto = 1
    console.log(ponto)
})

// Armazenamento de valores

let vetor_valores = []

// Funcionalidade de adição

let soma = document.getElementById("adicao")
let contSoma = 0

soma.addEventListener("click", () => {
    vetor_valores.push(resultado.innerText)
    if (igualdade == 0)
        igualdade++

    if(contSoma == 0)
        contSoma++

    ponto = 0
    resultado.innerText = 0
    console.log(igualdade)
    console.log(vetor_valores)

    if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] + +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
    }
})

// funcionalidade de subtracao

let subtracao = document.getElementById("subtracao")
let contSbutracao = 0

subtracao.addEventListener("click", () => {
    vetor_valores.push(resultado.innerText)
    if (igualdade == 0)
        igualdade++

    if (contSbutracao == 0)
        contSbutracao++

    ponto = 0
    resultado.innerText = 0

    if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] - +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
    }
})

// funcionalidade de multiplicacao

let multiplicacao = document.getElementById("multiplicacao")
let contMultiplicacao = 0

multiplicacao.addEventListener("click", () => {
    vetor_valores.push(resultado.innerText)
    if (igualdade == 0)
        igualdade++

    if (contMultiplicacao == 0)
        contMultiplicacao++

    ponto = 0
    resultado.innerText = 0

    if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] * +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
    }
})

// funcionalidade de divisao

let divisao = document.getElementById("divisao")
let contDivisao = 0

divisao.addEventListener("click", () => {
    vetor_valores.push(resultado.innerText)
    if (igualdade == 0)
        igualdade++

    if (contDivisao == 0)
        contDivisao++

    ponto = 0
    resultado.innerText = 0

    if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] / +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
    }
})

// funcionalidade do botao de remover

let remover = document.querySelector("#apagar")

remover.addEventListener('click', () => {
    resultado.innerText = 0
    ponto = 0
    vetor_valores.length = 0
    contDivisao = 0
    contMultiplicacao = 0
    contSoma = 0
    contSbutracao = 0

})

// funcionalidade do botao de igualdade 

let botaoIgualdade = document.getElementById("igualdade")

botaoIgualdade.addEventListener("click", () => {

    if (vetor_valores.length < 2 && resultado.innerText != 0)
        vetor_valores.push(resultado.innerText)

    console.log(`
        soma ${contSoma}
        sub ${contSbutracao}
        mult ${contMultiplicacao}
        divisao ${contDivisao}
        ${igualdade}
        `)

    if (igualdade == 0)
        igualdade++

    if(contSoma == 1) {
        if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] + +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
        contSoma--
        }
    }

    if(contSbutracao == 1) {
        if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] - +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
        contSbutracao--
        }
    }

    if(contMultiplicacao == 1) {
        if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] * +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
        contMultiplicacao--
        }
    }

    if(contDivisao == 1) {
        if(igualdade == 1 && vetor_valores.length == 2){
        resultado.innerText = +vetor_valores[0] / +vetor_valores[vetor_valores.length-1]
        igualdade = 0
        vetor_valores.length = 0
        console.log(vetor_valores)
        contDivisao--
        }
    }
})