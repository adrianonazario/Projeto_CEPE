const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventdefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

let htmlcssArrow = document.querySelector(".html-cssarrow");
htmlcssArrow.onclick = function() {
cssmenu.classList.toggle("show1");
}