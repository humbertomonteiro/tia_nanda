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
        nav.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" href="">Máteriais</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Contatos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Sobre</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Professora</a>
        </li>
        `
    }
}

addEventListener('resize', () => {
    tamanhoTela()
})

tamanhoTela()

toggleIcon.onclick = () => {
    navToggle.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" href="">Máteriais</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Contatos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Sobre</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Professora</a>
        </li>
        `
    navToggle.classList.toggle('none')
}

