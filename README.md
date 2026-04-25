# TriviaShift 🎯

> Trivia game built on a Tic-Tac-Toe board. Two players compete by answering professional scenarios — only a correct answer earns the cell.

**Live demo:** _coming soon_

> **Status:** Active development — game logic 80% complete. See [What's next](#whats-next).

---

## What it does

Two players take turns clicking cells on a 3×3 board. Before marking a cell, the active player must answer a multiple-choice question from their chosen professional sector. A correct answer marks the cell; a wrong answer passes the turn. First to get three in a row wins.

---

## Tech stack

- **HTML5** — semantic structure, no frameworks
- **CSS3** — dark mode, custom animations, modal system, responsive design
- **Vanilla JavaScript** — DOM manipulation, game state management, dynamic rendering

No libraries. No build tools. No dependencies.

---

## Project structure

```
triviashift/
├── index.html      # Markup and screen structure
├── styles.css      # Dark theme, board, modals, animations
└── script.js       # Game logic, question bank, state management
```

---

## UI & Design

Dark command aesthetic — built for focus, not decoration.

- **Typography:** Syne (titles) + DM Mono (data/body) via Google Fonts
- **Palette:** Near-black background (`#0a0c10`), layered surfaces, electric blue accent (`#4f8ef7`)
- **Effects:** Cell pop-in animation on mark, modal slide-up with backdrop blur, button slide on hover, input glow on focus
- **Grid background:** Subtle CSS dot grid for depth without noise

---

## Key JavaScript concepts applied

- **Object literals** as structured data (`SECTORES` question bank, `gameState`)
- **Array methods** — `forEach`, `every`, `some`, `fill`
- **DOM manipulation** — `querySelector`, `classList`, `createElement`, `addEventListener`
- **State management** — single `gameState` object as source of truth
- **`dataset` API** — reading `data-index` from cell elements
- **Modular functions** — each function has one responsibility

---

## How the game logic works

```
User clicks cell
    └─► Check gameState.tablero[index] === null
            └─► renderTarjetas(index)     — picks next question in order (no repeats)
                    └─► validarRespuesta(indiceOpcion, correcta, index)
                            ├─► correct  → marcarCelda() → checkWinner() or switchTurn()
                            └─► wrong    → switchTurn()
```

Win detection uses a fixed array of the 8 possible winning combinations and checks them after each successful move.

---

## Sectors available

| Sector | Questions |
|--------|-----------|
| 🏨 Hotel Reception | 50 real-world scenarios |
| 💪 Personal Training | In progress |

Questions are written as workplace situations, not trivia facts — players have to reason, not memorize.

---

## Background

I spent 8+ years in hotel operations before transitioning into frontend development. TriviaShift is the intersection of both: a technical project that solves a real problem I saw firsthand — onboarding new staff with realistic decision-making practice, not manuals.

The question bank for Hotel Reception is drawn directly from situations I handled at the front desk.

---

## What's next

- Complete `validarRespuesta` — answer validation + cell marking
- Complete `checkWinner` — three-in-a-row detection
- Replace `alert()` feedback with in-page result display
- Add "Play again" without full page reload
- Expand the Personal Training sector to 50 questions
- Score tracker across multiple rounds

---

## Author

**José María Aparicio**
Career changer — Hotel Operations → Frontend Development
[GitHub](https://github.com/anudoranador87) · [Email](mailto:josemaparicio87@gmail.com)
