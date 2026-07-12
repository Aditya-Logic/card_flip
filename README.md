# 🃏 Card Flip Memory Game

A fun and interactive **Card Flip Memory Game** built using **HTML, CSS, and JavaScript**. The objective is simple: flip two cards at a time and find all matching pairs before completing the board.

The project demonstrates JavaScript DOM manipulation, event handling, game state management, array shuffling, and CSS 3D animations.

---

## 🎮 How to Play

1. Click on a card to reveal its hidden value.
2. Click on a second card.
3. If both cards have the same value, they remain visible.
4. If the values do not match, the cards flip back after a short delay.
5. Continue until all pairs are matched.
6. Once all pairs are found, you win the game and the board automatically resets.

---

## ✨ Features

* Interactive card matching gameplay
* Randomized card positions every game
* Smooth 3D card flip animation
* Match counter
* Automatic win detection
* Game reset button
* Clean and responsive interface
* Fisher-Yates shuffle implementation

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 🌐 Live Demo

**Live Demo:** https://aditya-logic.github.io/card_flip/

---

## 📂 Project Structure

```text
card_flip-main/
│
├── index.html      # Game structure
├── style.css       # Styling and card animations
├── script.js       # Game logic
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya-Logic/card-flip-game.git
```

### 2. Navigate to the Project Directory

```bash
cd card-flip-game
```

### 3. Run the Project

Simply open:

```text
index.html
```

in your browser.

No additional dependencies are required.

---

## 🧠 Game Logic

### Card Shuffling

The game uses the **Fisher-Yates Shuffle Algorithm** to randomize card positions at the beginning of every game.

### Board Locking

To prevent players from flipping more than two cards simultaneously, the board is temporarily locked while unmatched cards are being checked.

### Match Detection

After two cards are flipped:

* Matching cards remain face-up.
* Non-matching cards flip back after a short delay.

### Win Condition

The game tracks matched pairs and declares victory when all 5 pairs have been found.

---

## 📚 Concepts Practiced

This project helped reinforce:

* DOM Manipulation
* Event Listeners
* JavaScript Arrays
* CSS Grid Layout
* CSS 3D Transforms
* Game State Management
* Fisher-Yates Shuffle Algorithm
* Timers using `setTimeout()`

---

## 🔮 Future Improvements

* Add timer and score system
* Multiple difficulty levels
* Different card themes and icons
* Sound effects
* Move counter
* Leaderboard using Local Storage
* Mobile optimization
* Dark/Light theme support

---

## 👨‍💻 Author

**Aditya Verma**

Passionate about Web Development, Data Structures & Algorithms, Machine Learning, and AI.

---

## 📄 License

This project is open-source and available under the MIT License.
