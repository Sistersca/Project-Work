# De Cecco - Report di Sostenibilità

Sviluppo di una pagina web per il download dei report di sostenibilità di un’impresa del settore secondario.
Il progetto è stato suddiviso in tre pagine con un design chiaro e intuitivo, garantendo accessibilità e responsive desing.

## Funzionalità
Le tre pagine principali sono: **Chi Siamo**, **Sostenibilità** e **FAQ**. 
Ogni pagina include:
- **Header con menu di navigazione**
- **Body della pagina**
- **Footer con riferimenti aziendali**


### Pagina "Chi Siamo"
- breve presentazione di **De Cecco** e della filosofia aziendale
- call to action per visitare la pagina sostenibilità
- punti di forza dell'azienda
- sezione introduttiva alla sostenibilità
- call to action per visitare le altre pagine

### Pagina "Sostenibilità"
- Titolo con **effetto parallax**  
- Sezione dedicata al **download dei report di sostenibilità**, con:
  - **Breve introduzione**  
  - **Pulsanti di download** per ogni anno disponibile

### Pagina "FAQ"
- Domande e risposte sulla sostenibilità e sull'impegno di De Cecco
- call to action per visitare le altre pagine

## Tecnologie Utilizzate
- HTML e CSS
- JAVASCRIPT
- BOOTSTRAP 
- Google Fonts

## 🗂 Struttura del progetto

La struttura è organizzata in modo chiaro e intuitivo. I file condivisi tra le due versioni del sito sono raccolti nella cartella `assets`, mentre le due versioni (modulare e stand alone) sono separate in cartelle distinte.

- `README.md`  
  Documentazione del progetto.

- `assets/`  
  Contiene tutte le risorse condivise:
  - `css/` → Foglio di stile principale (`style.css`)
  - `img/` → Immagini del sito (in formato WebP) e la favicon (`favicon.png`)
  - `pdf/` → Contiene i tre report di sostenibilità scaricabili

- `Modulare/`  
  Versione del sito modulare, con inclusione di file HTML comuni (richiede server):
  - `js_modulare/script.js` → Script JS per il pulsante di "scroll up" e per richiamare i moduli
  - `index.html` → Pagina "Chi Siamo"
  - `sostenibilita.html` → Pagina con il download dei report
  - `faq.html` → Pagina delle FAQ
  - `menu.html` → Header modulare riutilizzabile
  - `footer.html` → Footer modulare riutilizzabile
  - `robots.txt` → File per simulare una struttura SEO completa

- `Stand_alonne/`  
  Versione stand-alone del sito (non richiede server, tutte le pagine sono complete):
  - `js_stand_alone/script.js` → Script JS per il pulsante di "scroll up"
  - `index.html` → Pagina "Chi Siamo"
  - `sostenibilita.html` → Pagina con il download dei report
  - `faq.html` → Pagina delle FAQ
  - `robots.txt` → File per simulare una struttura SEO completa

## Autore

Project work realizzato da **Alberta Scardapane** per l'**Università Pegaso**
