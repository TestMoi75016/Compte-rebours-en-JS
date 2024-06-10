let form = document.getElementById("form");
let totalSecondes;
let interval;

function compteur() {
  let minutesDisplay = Math.floor(totalSecondes / 60);
  let secondesDisplay = totalSecondes % 60;

  if (secondesDisplay < 10) {
    countdownDisplay.innerHTML = `<span>${minutesDisplay}:${0}${secondesDisplay}</span>`;
  } else {
    countdownDisplay.innerHTML = `<span>${minutesDisplay}:${secondesDisplay}</span>`;
  }

  if (totalSecondes > 0) {
    totalSecondes--;
  } else {
    countdownDisplay.textContent = "Fin du compte à rebours !";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSecondes = choice.value * 60;
  interval = setInterval(() => {
    compteur();
  }, 1000);
});
