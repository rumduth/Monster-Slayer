# Monster Slayer

A turn-based battle game built with Vue.js 3 where you fight against a monster in an epic showdown!

## 🎮 Live Demo

**[Play the game here!](https://luxury-sherbet-abd07f.netlify.app)** 🎯

## 🎮 Game Overview

Monster Slayer is a browser-based turn-based combat game where players battle against a computer-controlled monster. Use strategy to manage your health, choose the right attacks, and defeat the monster before it defeats you!

## ✨ Features

- **Turn-based Combat**: Strategic gameplay with player and monster taking turns
- **Multiple Action Types**:
  - Regular Attack (5-12 damage)
  - Special Attack (10-25 damage, available every 3 rounds)
  - Heal (8-20 health restoration)
  - Surrender option
- **Visual Health Bars**: Real-time health tracking with animated progress bars
- **Battle Log**: Complete history of all actions taken during the fight
- **Game States**: Win, lose, or draw outcomes with restart functionality
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework for reactive UI
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox and animations
- **JavaScript ES6+** - Game logic and interactivity

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start playing immediately - no installation required!

Alternatively, you can serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## 🎯 How to Play

### Game Rules

- Both you and the monster start with 100 health points
- Take turns attacking each other until one reaches 0 health
- First to reach 0 health loses the game
- If both reach 0 health simultaneously, it's a draw

### Controls

- **ATTACK**: Deal 5-12 damage to the monster
- **SPECIAL ATTACK**: Deal 10-25 damage (available every 3 rounds)
- **HEAL**: Restore 8-20 health points (max 100)
- **SURRENDER**: Give up and let the monster win

### Strategy Tips

- Use regular attacks to build up to special attacks
- Heal when your health gets low, but remember the monster will attack while you heal
- Special attacks are powerful but have a cooldown - use them wisely!
- Watch the battle log to track damage patterns

## 📁 Project Structure

```
monster-slayer/
├── index.html      # Main HTML structure and Vue.js template
├── styles.css      # Game styling and responsive design
├── app.js          # Vue.js application logic and game mechanics
└── README.md       # This file
```

### File Descriptions

- **index.html**: Contains the game's HTML structure with Vue.js directives for dynamic content
- **styles.css**: Handles all visual styling including health bars, buttons, and responsive layout
- **app.js**: Vue.js application with game state management, combat logic, and user interactions

## 🎲 Game Mechanics

### Damage System

- **Player Attack**: 5-12 random damage
- **Player Special Attack**: 10-25 random damage (3-round cooldown)
- **Monster Attack**: 8-15 random damage
- **Player Heal**: 8-20 random health restoration

### Special Attack Cooldown

- Special attacks become available every 3 regular rounds
- Counter resets after using a special attack
- Button is disabled when special attack is not available

## 🌐 Browser Compatibility

This game works in all modern browsers that support:

- ES6+ JavaScript features
- CSS3 flexbox
- Vue.js 3

**Recommended browsers:**

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔮 Future Enhancements

Potential improvements for the game:

- Multiple monster types with different stats
- Player character classes with unique abilities
- Equipment system for weapons and armor
- Sound effects and background music
- Difficulty levels
- Save/load game progress
- Multiplayer functionality

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy the battle and may the best fighter win!** ⚔️
