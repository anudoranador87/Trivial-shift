import { SECTORES } from './questions.js';

// --- ESTADO DEL JUEGO ---
const gameState = {
  tablero: Array(9).fill(null),
  jugadorActual: "X",
  nombres: { X: "", O: "" },
  esActivo: true,
  preguntasUsadas: [],
  sectorActual: "recepcion",
};

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

// --- ELEMENTOS DEL DOM ---
const elements = {
  startBtn: document.getElementById("start-game"),
  setupScreen: document.getElementById("setup-screen"),
  gameScreen: document.getElementById("game-screen"),
  currentPlayerName: document.getElementById("current-player-name"),
  sectorSelect: document.getElementById("sector-select"),
  cells: document.querySelectorAll(".cell"),
  questionModal: document.getElementById("question-modal"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  player1Input: document.getElementById("player1"),
  player2Input: document.getElementById("player2"),
};

// --- LÓGICA DE INICIO ---
elements.startBtn.addEventListener("click", () => {
  const p1 = elements.player1Input.value.trim();
  const p2 = elements.player2Input.value.trim();

  if (!p1 || !p2) {
    alert("Por favor, ingresa los nombres de ambos jugadores");
    return;
  }

  gameState.nombres.X = p1;
  gameState.nombres.O = p2;
  gameState.sectorActual = elements.sectorSelect.value;
  gameState.preguntasUsadas = [];

  elements.setupScreen.classList.add("hidden");
  elements.gameScreen.classList.remove("hidden");
  updateStatus();
});

// --- GESTIÓN DEL TABLERO ---
elements.cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;
    if (gameState.tablero[index] === null && gameState.esActivo) {
      handleCellClick(index);
    }
  });
});

function handleCellClick(index) {
  const sector = SECTORES[gameState.sectorActual];
  const preguntas = sector.preguntas;

  // Seleccionar pregunta no usada
  let disponible = preguntas.filter((_, idx) => !gameState.preguntasUsadas.includes(idx));
  
  if (disponible.length === 0) {
    gameState.preguntasUsadas = []; // Reset si se acaban
    disponible = preguntas;
  }

  const randomIdx = Math.floor(Math.random() * disponible.length);
  const preguntaOriginalIdx = preguntas.indexOf(disponible[randomIdx]);
  const pregunta = disponible[randomIdx];

  gameState.preguntasUsadas.push(preguntaOriginalIdx);
  showQuestion(pregunta, index);
}

// --- MODAL DE PREGUNTAS ---
function showQuestion(pregunta, cellIndex) {
  elements.questionText.textContent = pregunta.pregunta;
  elements.optionsContainer.innerHTML = "";

  pregunta.opciones.forEach((opcion, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(idx, pregunta.correcta, cellIndex);
    elements.optionsContainer.appendChild(btn);
  });

  elements.questionModal.classList.remove("hidden");
}

function checkAnswer(selected, correct, cellIndex) {
  elements.questionModal.classList.add("hidden");
  
  if (selected === correct) {
    gameState.tablero[cellIndex] = gameState.jugadorActual;
    renderBoard();
    if (checkWin()) {
      endGame(`¡${gameState.nombres[gameState.jugadorActual]} ha ganado!`);
    } else if (gameState.tablero.every(c => c !== null)) {
      endGame("¡Empate técnico!");
    } else {
      switchPlayer();
    }
  } else {
    alert("Respuesta incorrecta. Turno para el siguiente jugador.");
    switchPlayer();
  }
}

// --- UTILIDADES ---
function renderBoard() {
  elements.cells.forEach((cell, i) => {
    cell.textContent = gameState.tablero[i] || "";
    if (gameState.tablero[i]) {
      cell.classList.add("taken");
    }
  });
}

function switchPlayer() {
  gameState.jugadorActual = gameState.jugadorActual === "X" ? "O" : "X";
  updateStatus();
}

function updateStatus() {
  elements.currentPlayerName.textContent = gameState.nombres[gameState.jugadorActual];
}

function checkWin() {
  return WINNING_COMBINATIONS.some(combo => {
    return combo.every(i => gameState.tablero[i] === gameState.jugadorActual);
  });
}

function endGame(msg) {
  gameState.esActivo = false;
  setTimeout(() => {
    alert(msg);
    location.reload(); // Simple reset
  }, 100);
}
