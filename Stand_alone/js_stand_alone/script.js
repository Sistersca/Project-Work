// Mostra o nasconde il pulsante in base allo scroll
window.onscroll = function () { // quando l'utente scorre la pagina
  const scrollTopBtn = document.getElementById("scrollTopBtn"); // seleziono il pulsante con id "scrollTopBtn"

  // SE l'utente ha scrollato verso il basso di almeno 400 pixel
  // ALLORA mostra il pulsante (impostando display su "block")
  // ALTRIMENTI nascondilo (impostando display su "none")
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Riporta la pagina in alto quando si clicca il pulsante
function topFunction() { // definisco la funzione "topFunction"
  // Quando viene chiamata, riporta la pagina in alto (scrollTop = 0)
  document.body.scrollTop = 0;             // Per Safari
  document.documentElement.scrollTop = 0;  // Per altri browser (Chrome, Firefox, Edge...)
}
