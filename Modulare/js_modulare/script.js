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

// Funzione per caricare dinamicamente i componenti comuni (menu e footer)

// Caricamento del menu da file esterno "menu.html"
fetch("menu.html") // invio una richiesta per ottenere il contenuto di "menu.html"
  .then(response => response.text()) // quando ricevo la risposta, la converto in testo HTML
  .then(html => {
    document.getElementById("menu-header").innerHTML = html; // inserisco il menu dentro l'elemento con id "menu-header"

    // Dopo aver caricato il menu, procedo con il caricamento del footer

    // Caricamento del footer da file esterno "footer.html"
    fetch("footer.html") // invio una richiesta per ottenere il contenuto di "footer.html"
      .then(response => response.text()) // quando ricevo la risposta, la converto in testo HTML
      .then(html => {
        document.getElementById("footer").innerHTML = html; // inserisco il footer dentro l'elemento con id "footer"
      });
  });
