const overlay = document.getElementById('overlay');
const container = document.getElementById('container');
const mainText = document.getElementById('mainText');
const particles = document.getElementById('particles');
const collectibles = document.getElementById('collectibles');
const bgHearts = document.getElementById('background-hearts');
const bgMusic = document.getElementById('bgMusic');

let step = 0;
let collected = 0;
let musicStarted = false;

const messages = [
  "Esto no es una invitación O SI JAJAJ, no te creas jeje .",
  "es un detallito siemple pero bonito broti.",
  "las cosas con el tiempo cambia y aveces duelen pero sabes lo que no cambia.",
  "EL PODER DE LA AMISTAD.",
  "nuestro primer 14 con rumbos y metas y pensamientos disferentes pero la misma amistad desde 26/10/2021.",
  " espero no sientas ni veas raro esto jeje, solo darte las gracias..Por compartir un pedacito de tu vida conmigo, por las risas,por esas platicas nocturnas, gracias por todo:D💙"
];

/* INICIO + MÚSICA */
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  container.classList.remove('hidden');
  nextMessage();

  if (!musicStarted) {
    bgMusic.volume = 0.35; // suave, elegante
    bgMusic.play();
    musicStarted = true;
  }
});

/* MENSAJES PROGRESIVOS */
document.addEventListener('click', () => {
  if (step < messages.length - 1) {
    step++;
    nextMessage();
    spawnCollectible();
  }
});

function nextMessage() {
  mainText.textContent = messages[step];
}

/* PARTÍCULAS CON MOUSE */
document.addEventListener('mousemove', (e) => {
  const p = document.createElement('div');
  p.className = 'particle';
  p.textContent = Math.random() > 0.5 ? '✨' : '💙';
  p.style.left = e.clientX + 'px';
  p.style.top = e.clientY + 'px';
  particles.appendChild(p);
  setTimeout(() => p.remove(), 1500);
});

/* OBJETOS JUGABLES */
function spawnCollectible() {
  const c = document.createElement('div');
  c.className = 'collectible';
  c.textContent = '💠';
  c.style.left = Math.random() * 90 + 'vw';
  c.style.top = Math.random() * 80 + 'vh';

  c.addEventListener('click', (e) => {
    e.stopPropagation();
    collected++;
    c.remove();
    if (collected === 3) {
      mainText.textContent = "Ganaste algo que no se compra.";
    }
  });

  collectibles.appendChild(c);
  setTimeout(() => c.remove(), 6000);
}

/* CORAZONES DE FONDO */
function spawnBackgroundHeart() {
  const heart = document.createElement('div');
  heart.className = 'bg-heart';
  heart.textContent = Math.random() > 0.5 ? '💙' : '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 8 + Math.random() * 10 + 's';
  bgHearts.appendChild(heart);
  setTimeout(() => heart.remove(), 20000);
}
setInterval(spawnBackgroundHeart, 700);
