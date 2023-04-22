const about = document.querySelectorAll('[about]')
const main = document.querySelector('main')

const locationHere = document.querySelector('[location]')

const medias = document.querySelector('[medias]')

const navbar = document.querySelector('#navbar')
const btnToggle = document.querySelector('.btn-toggle')


about.forEach(e => {
    e.onclick = a => {
        a.preventDefault()

        fetch(e.getAttribute('about'))
            .then(resp => resp.text())
            .then(page => main.innerHTML = page)

        closeOpenToggle() 
    }
})

locationHere.onclick = a => {
    a.preventDefault()

    fetch('pages/location.html')
        .then(resp => resp.text())
        .then(page => main.innerHTML = page)

    closeOpenToggle() 
}

medias.onclick = a => {
    a.preventDefault()

    fetch('pages/media.html')
        .then(resp => resp.text())
        .then(page => main.innerHTML = page)

    closeOpenToggle() 
}


btnToggle.onclick = () => {
    navbar.classList.toggle('navbar')
    navbar.classList.toggle('show-toggle')
}


function closeOpenToggle() {

    const showOrHidden = navbar.classList.contains('navbar')

    if(showOrHidden) {
        navbar.classList.add('navbar')
        navbar.classList.remove('show-toggle')
    } else {
        navbar.classList.toggle('navbar')
        navbar.classList.toggle('show-toggle')
    }
    
}