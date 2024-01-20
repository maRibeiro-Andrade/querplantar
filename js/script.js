const links = document.querySelectorAll(".sidenav a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Animaçõo

if (window.SimpleAnime) {
  new SimpleAnime();
}
