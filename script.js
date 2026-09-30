const teclas = document.querySelectorAll('button')
let largura = teclas.clientWidth
let resultado_div = document.querySelector('.resultado')

function larguraResultado (){
    resultado_div.style.width = largura + 'px'
}

window.addEventListener('click', function(event) {
    let resultado = document.getElementById("resultado")
    let valores = event.target.value
    let olhar = resultado.innerText

     if(valores != '+' && valores != '-' && valores != '/' && valores != 'x'){
        valores = +valores
     }

    if (valores == undefined){
        return false
    } else if (olhar == 0 && typeof valores == 'number') {
        resultado.innerText = valores
    } else if(typeof valores){
        resultado.innerText += `${valores}`
    }

    console.log(typeof valores)
})