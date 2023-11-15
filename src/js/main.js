const projetoPequeno = document.querySelectorAll('.projeto-pequeno');
const projetoGrande = document.querySelectorAll('.projeto')

projetoPequeno.forEach((botao, indice) => {

    botao.addEventListener('mouseenter', () => {

        const projetoSelecionado = document.querySelector('.selecionado')
        projetoSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')
        projetoGrande[indice].classList.add('selecionado')

    })

})


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
