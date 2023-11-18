const navbar = document.querySelector("#navbar");
const btnToggle = document.querySelector(".btn-toggle");

const link = document.querySelectorAll(".link");

btnToggle.onclick = () => {
  navbar.classList.toggle("navbar");
  navbar.classList.toggle("show-toggle");
};

function linkAjax(event, url) {
  event.preventDefault();

  fetch(url)
    .then((resp) => resp.text())
    .then((page) => (main.innerHTML = page));

  closeOpenToggle();
}

link.forEach((e) => {
  // e.onclick = alert("alo");
  e.onclick = () => closeOpenToggle();
});

function closeOpenToggle() {
  const showOrHidden = navbar.classList.contains("navbar");

  if (showOrHidden) {
    navbar.classList.add("navbar");
    navbar.classList.remove("show-toggle");
  } else {
    navbar.classList.toggle("navbar");
    navbar.classList.toggle("show-toggle");
  }
}
