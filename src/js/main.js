const letraEscrita = document.querySelector('.animaçao-letra')

function ativarLetra (elemento) {
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    arrTexto.forEach((letra, i ) => {
        setTimeout(() => {
            elemento.innerHTML += letra 
        }, 95 * i)
    })
}

ativarLetra(letraEscrita)
