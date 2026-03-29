# Hacker vs Firewall Workshop

This is a small browser based battle game built with HTML and JavaScript.
You play as a Hacker fighting a Firewall. Each turn you pick an ability, the Firewall strikes back, and the fight continues until one side hits 0 HP.

**This workshop has two hands on tasks: Modify the game values, then write a missing ability function.**

---

## How to run

1. Download or clone this project
2. Open `index.html` in your browser, no server or install needed
3. Play a round to get a feel for the game before editing anything

---

## Abilities

| Ability          | What it does                                                   |
| ---------------- | -------------------------------------------------------------- |
| Brute Force      | Deals reliable damage every turn                               |
| Encrypt          | Cuts the next hit you take in half                             |
| Patch System     | Heals 18 HP but weakens your next attack                       |
| Zero-Day Exploit | High damage, but has a chance to backfire and hurt you instead |

---

## Task 1: Tune the values `js/config.js`

Open `js/config.js` and find the **Zero-Day Exploit** section.
Change the three values and refresh the browser to see how the game changes.

```js
// How many times stronger than Brute Force (try 1.5 to 3.0)
zeroDayMultiplier: 2.2,
// Probability it backfires (0.0 = never, 1.0 = always, try 0.2 to 0.4)
zeroDayBackfireChance: 0.3,
// HP you (hacker) lose when it backfires (try 10 to 20)
zeroDayBackfireDamage: 12,
```

Save the file, refresh the browser, and use Zero-Day a few times to feel the diff.

---

## Task 2: Write the function `js/abilities.js`

Open `js/abilities.js` and scroll to `zeroDayExploit()` has TODO comments for you.

Follow each TODO in order:

**TODO 1: Apply patch penalty**
**TODO 2: Backfire check (if / else)**
**TODO 3: End the turn**

Save, refresh the browser, and test the Zero-Day button.

---

## Project file overview

```
index.html          Page layout and ability buttons
style.css           All styling
js/
  config.js         All game numbers — edit this for Task 1
  state.js          Live game state (HP, turn, flags)
  abilities.js      Hacker ability functions — edit this for Task 2
  firewallTurn.js   Firewall auto-attack logic
  game.js           Turn flow and win/loss check
  render.js         Updates the UI after every action
  log.js            Battle log messages
  main.js           Wires buttons to functions on page load
```

---

## What I want you to take away from this

This game is simple. The whole thing is just numbers changing and functions calling each other.
But that is kind of the point. When you changed `zeroDayMultiplier`, you were making a game design decision. When you wrote the backfire check, you were turning a rule - "30% chance it blows up", into actual working code. That is what programming is. You define the rules, and the computer follows them exactly.

The other thing I hope you noticed is that reading someone else's code is a real skill. You didnt write this project from scratch, but you still figured out what was going on and added to it. That is closer to real dev work than starting from blank file.

And game is just a simulation. The Firewall attacking every turn, the HP going down, the backfire chance, all of that is just math and logic. Once you see how something like this is built, building your own version of it is not that far off.

I hope you enjoyed my workshop. Thanks!

---
