// Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// Buon Lavoro

// API di Boolean per generare una email
const ApiBoolean = `https://flynn.boolean.careers/exercises/api/random/mail`;
const numerMails = 10;

// ASSEGNAZIONE alla Constante Elemento il valore della classe che ho in HTML
const elementMailsList = document.querySelector(`.emails-list`);
const elementBtn = document.querySelector(`.btn`);

// CREO FUNZIONE PER LA GENERAZIONE

function createMailsRandom() {
  for (let i = 0; i < numerMails; i++) {
    axios
      .get(ApiBoolean)

      //una volta ottenuta risposta le affido ad una variabile
      .then((response) => {
        const email = response.data.response;
        //creo tramite innerHTML la parte di struttura HTML con il valore della variabile della risposta
        elementMailsList.innerHTML += ` <li> ${email}</li> `;
        return email;
      });
  }
}

// CICLO FOR per richiedere API di Boolean,

for (let i = 0; i < 10; i++) {
  axios
    .get(ApiBoolean)

    //una volta ottenuta risposta le affido ad una variabile
    .then((response) => {
      const email = response.data.response;
      //creo tramite innerHTML la parte di struttura HTML con il valore della variabile della risposta
      elementMailsList.innerHTML += ` <li> ${email}</li> `;
    });
}

elementBtn.addEventListener(`click`, function () {
  elementMailsList.innerHTML = "";
  createMailsRandom(numerMails, ApiBoolean);
});
