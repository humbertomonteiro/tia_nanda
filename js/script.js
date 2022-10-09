const toggleIcon = document.querySelector('#toggle')
const nav = document.querySelector('#nav')
const navToggle = document.querySelector('#nav-toggle')


const tamanhoTela = () => {
    const tela = innerWidth
    if(tela <= 700) {
        nav.classList.add('none')
        toggleIcon.classList.remove('none')

    } else if (tela >= 701) {
        nav.classList.remove('none')
        toggleIcon.classList.add('none')
        navToggle.classList.add('none')
    }
}

addEventListener('resize', () => {
    tamanhoTela()
})

tamanhoTela()

toggleIcon.onclick = () => {
    navToggle.innerHTML = nav.innerHTML
    navToggle.classList.toggle('none')
}