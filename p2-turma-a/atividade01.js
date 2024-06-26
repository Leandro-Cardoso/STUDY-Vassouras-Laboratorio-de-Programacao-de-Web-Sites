const buttons = document.getElementsByTagName('button')
const text = document.getElementById('cor')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', mudarCor)
}

function mudarCor() {
    text.style.color = 'red'
    alert('Texo alterado.')
}
