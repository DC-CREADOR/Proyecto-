const c = document.getElementById('c').getContext('2d');
c.fillStyle = "#FFF";
c.font = "60px monospace";
let w = s = 1;
let p = q = a = b = 0;
let m = n = 190;
let x = 300; let y = 235;
let u = -5; let v = 3;

// Variable para verificar si el juego ya ha comenzado
let gameStarted = false;

// Función para iniciar el juego
function startGame() {
  if (!gameStarted) { // Verifica si el juego no ha comenzado
    gameStarted = true; // Cambia el estado a iniciado
    console.log("¡El juego ha comenzado!"); // Mensaje de inicio del juego

    // Aquí puedes agregar la lógica para iniciar el juego, como reiniciar variables, etc.
  }
}

// Añadir un evento de clic para iniciar el juego
document.addEventListener("click", startGame);


setInterval(function () {
  if (w && !s) return;
  s = 0;
  c.clearRect(0, 0, 640, 480);
  for (let i = 5; i < 480; i += 20) c.fillRect(318, i, 4, 10);

  m += p; n += q;
  m = m < 0 ? 0 : m > 380 ? 380 : m;
  n = n < 0 ? 0 : n > 380 ? 380 : n;

  x += u; y += v;
  if (y <= 0 || y >= 470) v = -v;
  if (x <= 40 && x >= 20 && y < m + 110 && y > m - 10) { u = -u + 0.2; v += (y - m - 45) / 20; }
  if (x >= 590 && x <= 610 && y < n + 110 && y > n - 10) { u = -u - 0.2; v += (y - n - 45) / 20; }
  if (x < -10) { b++; x = 360; y = 235; u = 5; w = 1; }
  if (x > 640) { a++; x = 280; y = 235; u = -5; }

  c.fillText(a + " " + b, 266, 60);
  c.fillRect(20, m, 20, 100);
  c.fillRect(600, n, 20, 100);
  c.fillRect(x, y, 10, 10);
}, 30);

// Evento para iniciar el juego con un clic
document.getElementById('c').onclick = startGame;

document.onkeydown = function (e) {
  let k = (e || window.event).keyCode;
  w = w ? 0 : k == '27' ? 1 : 0;
  p = k == '65' ? 5 : k == '81' ? -5 : p;
  q = k == '40' ? 5 : k == '38' ? -5 : q;
};
document.onkeyup = function (e) {
  let k = (e || window.event).keyCode;
  p = (k == '65' || k == '81') ? 0 : p;
  q = (k == '38' || k == '40') ? 0 : q;
};

// Eventos para los botones
document.getElementById('left-up').onclick = function () { p = -5; };
document.getElementById('left-down').onclick = function () { p = 5; };
document.getElementById('right-up').onclick = function () { q = -5; };
document.getElementById('right-down').onclick = function () { q = 5; };

document.getElementById('left-up').onmouseup =
document.getElementById('left-down').onmouseup = function () { p = 0; };

document.getElementById('right-up').onmouseup =
document.getElementById('right-down').onmouseup = function () { q = 0; };
