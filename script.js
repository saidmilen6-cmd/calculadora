const teclas = document.querySelectorAll('button')
let largura = teclas.clientWidth
let resultado_div = document.querySelector('.resultado')

function larguraResultado (){
    resultado_div.style.width = largura + 'px'
}

butaoValores = document.querySelectorAll(".valor")


butaoValores.forEach(botao => {
    botao.addEventListener('click', function(event) {
        let resultado = document.getElementById("resultado")
        let valores = event.target.value
        let olhar = resultado.innerText
        
        if (valores == undefined){
            return false
        } else if (olhar == 0) {
            resultado.innerText = valores
        } else if(typeof valores){
            resultado.innerText += `${valores}`
        }
        
    })
});
    console.log(butaoValores)