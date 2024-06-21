const titulo = document.querySelector('h1')
const botao = document.getElementById('botao')

let isRed = false

botao.addEventListener('click', mudarCor)

function mudarCor() {
    if (isRed) {
        titulo.innerHTML = 'Vermelho'
        titulo.style.color = 'red'
        isRed = false
    }
    else {
        titulo.innerHTML = 'Verde'
        titulo.style.color = 'green'
        isRed = true
    }
    alert('Cor modificada')
}
