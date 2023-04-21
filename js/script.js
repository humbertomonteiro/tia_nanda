const about = document.querySelectorAll('[about]')
const main = document.querySelector('main')

about.forEach(e => {
    e.onclick = a => {
        a.preventDefault()

        fetch(e.getAttribute('about'))
            .then(resp => resp.text())
            .then(page => main.innerHTML = page)
    }
})
