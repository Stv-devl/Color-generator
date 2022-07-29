// créer 3 variables pour stoker 3 chiffre aléatoire
// Donner au body une couleur de fond en rgb()
// Afficher sur le body la couleur rgb

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const body = document.querySelector("body");

  let color = "rgb(" + r + ", " + g + ", " + b + ")";

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}<h2>`;
}

setInterval(randomColor, 2500);
