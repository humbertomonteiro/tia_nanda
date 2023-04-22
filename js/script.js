const main = document.querySelector('main')

const about = document.querySelectorAll('[about]')

const materials = document.querySelector('[materials]')

const locationHere = document.querySelector('[location]')

const medias = document.querySelector('[medias]')

const navbar = document.querySelector('#navbar')
const btnToggle = document.querySelector('.btn-toggle')


about.forEach(e => {
    e.onclick = a => {
        linkAjax(a, 'pages/about.html')
    }
})

materials.onclick = a => {
    linkAjax(a, 'pages/materials.html')
}

locationHere.onclick = a => {
    linkAjax(a, 'pages/location.html')
}

medias.onclick = a => {
    linkAjax(a, 'pages/media.html')
}


btnToggle.onclick = () => {
    navbar.classList.toggle('navbar')
    navbar.classList.toggle('show-toggle')
}


function linkAjax(event, url) {
    event.preventDefault()

    fetch(url)
        .then(resp => resp.text())
        .then(page => main.innerHTML = page)

    closeOpenToggle()
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