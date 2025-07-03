const canvas = document.getElementById("lluvia"); 
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const palabrasSuaves = [
  "💖 Eres Increíble", "🌹 Preciosa", "💕 Perfecta", "✨ Bella",
  "💘 Ojos Hermosos", "😍 Sonrisa Encantadora", "💞 La Mejor", "🥰 Mi Todo"
];

const coloresSuaves = [
  "#ff6b81",  // coral suave
  "#ff9ff3",  // lavanda brillante
  "#feca57",  // dorado suave
  "#48dbfb",  // azul cielo claro
  "#1dd1a1",  // verde menta
  "#f368e0",  // rosado neón suave
  "#00d2d3",  // turquesa pastel
  "#c8d6e5",  // gris claro neutro
  "#ee5253",  // rojo floral
  "#5f27cd"   // violeta encantador
];

function crearPalabraFlotante() {
  const palabra = document.createElement("span");
  palabra.className = "palabra-flotante";
  palabra.innerText = palabrasSuaves[Math.floor(Math.random() * palabrasSuaves.length)];

  // Estilo aleatorio
  const tamaño = Math.random() * 10 + 20;
  palabra.style.fontSize = `${tamaño}px`;
  palabra.style.color = coloresSuaves[Math.floor(Math.random() * coloresSuaves.length)];

  // Posición X
  const x = Math.random() * window.innerWidth;
  palabra.style.left = `${x}px`;

  // Duración de animación
  const duracion = Math.random() * 5 + 5; // entre 5 y 10 segundos
  palabra.style.animationDuration = `${duracion}s`;

  // Sin retraso: que caiga inmediatamente
  palabra.style.animationDelay = `0.5s`;

  document.getElementById("contenedor-lluvia").appendChild(palabra);

  // Quitar la palabra después de caer
  setTimeout(() => palabra.remove(), duracion * 1000);
}

// Generar continuamente
setInterval(crearPalabraFlotante, 700);

// -----------------------------------------
// Palabras tipo explosión al hacer clic
// -----------------------------------------

const palabrasBonitas = [
  "💖 Evelyn Te Amo", "🌹 Niña de mi corazón", "💘 Mi dulce niña", "❤️ Siempre tú, Evelyn"
];

function crearExplosionPalabra(x, y) {
  const palabra = document.createElement("span");
  palabra.className = "explosion-palabra";
  palabra.innerText = palabrasBonitas[Math.floor(Math.random() * palabrasBonitas.length)];
  palabra.style.left = `${x}px`;
  palabra.style.top = `${y}px`;
  document.body.appendChild(palabra);

  setTimeout(() => {
    palabra.remove();
  }, 1000); // quitar después de 1 segundo
}

// Eventos para clic o toque
window.addEventListener("click", (e) => {
  crearExplosionPalabra(e.clientX, e.clientY);
});

window.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  crearExplosionPalabra(touch.clientX, touch.clientY);
});
