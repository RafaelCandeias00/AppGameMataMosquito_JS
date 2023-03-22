var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

// Ajustando tamanho do paclo
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 2000)


function posicaoRandomica() {
    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // remove coração de vidas
        if (vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "assets/img/coracao_vazio.png"
            vidas++
        }

    }

    // Valores aleatórios
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar elemento HTML e recupera caminho da imagem
    var mosquito = document.createElement("img")
    mosquito.src = "assets/img/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    // adiciona elemento criado ao body
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}
