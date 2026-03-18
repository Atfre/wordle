# ✅ Wordle - Clone Game

A fully functional Wordle clone built with **React**, **TypeScript** and **Vite**.

The project recreates the main mechanics of the original Wordle game, focusing on clean architecture, state management, and a custom letter evaluation algorithm.

## 💻 Live Demo
🔗 [Try it yourself!](https://wordle-clone-jade-nu.vercel.app/)

## ✨ Features

- 6 attempts to guess a 5 letter word
- Real-time grid rendering
- Letter state evaluation:
  - 🟢 Correct position
  - 🟡 Present in word
  - ⚫ Absent
- Dynamic keyboard coloring based on guesses
- Random word fetched from an external API
- Win/lose detection
- Physical keyboard support
- Responsive layout

---

## 📂 Structure

```
src/
 ├── components/
 │    ├── Grid.tsx
 │    └── Keyboard.tsx
 ├── utils.ts
 ├── word.ts
 └── App.tsx
```
- **App** - Game controller and state management
- **Grid** - Displays guesses and letters
- **KeyBoard** - Interactive virtual keyboard
- **Utils** - Game logic and functions
- **Word** - Handles random word fetching

---

## 📦 Installation

- **(1) Clone the repository**
```
https://github.com/Atfre/wordle.git
cd wordle
```
- **(2) Install dependencies**
```
npm install
```
- **(3) Run the development server**
```
npm run dev
```
- **(4) Open in your browser**
  - Vite will provide a local URL (usually): `(http://localhost:5173)`
---

## 🌐 External API

Words are fetched from:

🔗 https://random-word-api.herokuapp.com
