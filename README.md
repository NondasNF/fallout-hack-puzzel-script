## Description 
This project aims to assist in solving the hacking puzzle in the Fallout 4 game. Let's delve into the details of the puzzle:

The puzzle involves a mini-game within the main game where the player needs to hack a computer and access the data. To accomplish this, the player must find a password hidden within a code. The computer presents the player with several words that can be selected and tried as potential passwords. Among these options, only one is the correct password. If the player makes a mistake, the computer provides feedback by indicating how close the guess was. Specifically, it reveals the correspondence between the guessed letters and the correct password, including the positions of these letters.

Given this information, I created a script that isolates the possible words into an array. With each attempt, the script provides feedback on the potential answers among the remaining untested words.

![Fallout4 23_04_2024 21_30_41](https://github.com/NondasNF/fallout-hack-puzzle-script/assets/54701024/f160479c-97df-4069-b1f6-14b0d76a3e2b)

My solution consists of checking the possible solutions based on the first guesses, whenever possible eliminating any word that, based on the previous guess, cannot be the correct answer, i built the script with JavaScript.

## How to use
Using node to run the script, you can run the script by typing the following command in the terminal:

```bash
node script.js
```

