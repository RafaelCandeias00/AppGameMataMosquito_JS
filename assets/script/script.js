var altura = 0
var largura = 0

// Ajustando tamanho do paclo
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
    // Valores aleatórios
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// Criar elemento HTML e recupera caminho da imagem
var mosquito = document.createElement("img")
mosquito.src = "assets/img/mosca.png"
mosquito.className = "mosquito1"
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
// adiciona elemento criado ao body
document.body.appendChild(mosquito)
}
