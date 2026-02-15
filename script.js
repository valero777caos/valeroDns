const cards = [
  `Delia, yo ni pensé en hacer esta tarjeta… pero algo en mí decidió dejarte este jardín.\nComo si el corazón, sin pedir permiso, supiera que hoy necesitabas un poco de primavera.\nQue estas flores te recuerden que lo que haces importa: escuchar, comprender, sostener.`,
  `Delia, tu vocación de escuchar y comprender es un acto de amor silencioso.\nQue Dios te sostenga cuando el cansancio sea invisible\ny te dé ánimo cuando la mente se llene de preguntas.`,
  `Delia, que tu camino no sea una prisa, sino una dirección.\nQue tu fe sea luz en los días claros,\ny brújula en los días nublados.`,
  `Delia, en un mundo que mide a las personas por resultados,\nque nunca se te olvide lo esencial:\ntu valor no se negocia, se reconoce.`,
  `Delia, si el día te carga, no lo cargues sola.\nQue tu corazón tenga un lugar donde soltar lo que aprieta,\ny volver a respirar.`,
  `Delia, que el amor que te rodee sea hogar, no tormenta;\nque te cuide con paciencia,\ny te hable con verdad.`,
  `Delia, que tu fe no sea ruido: que sea firmeza.\nQue tengas valentía sin dureza,\ny ternura sin miedo.`,
  `Delia, cuando no sepas qué sigue, entrega el paso de hoy.\nDios trabaja también en lo pequeño,\nen lo que nadie aplaude.`
];

const messageCard = document.getElementById('messageCard');
const messageText = document.getElementById('messageText');
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
let startX = 0;

function renderCard() {
  messageText.textContent = cards[index];
  counter.textContent = `Tarjeta ${index + 1} de ${cards.length}`;
}

function nextCard() {
  index = (index + 1) % cards.length;
  renderCard();
}

function prevCard() {
  index = (index - 1 + cards.length) % cards.length;
  renderCard();
}

prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

messageCard.addEventListener('touchstart', (event) => {
  startX = event.changedTouches[0].clientX;
});

messageCard.addEventListener('touchend', (event) => {
  const endX = event.changedTouches[0].clientX;
  const delta = endX - startX;

  if (Math.abs(delta) < 45) return;

  if (delta < 0) {
    nextCard();
  } else {
    prevCard();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') nextCard();
  if (event.key === 'ArrowLeft') prevCard();
});

renderCard();
