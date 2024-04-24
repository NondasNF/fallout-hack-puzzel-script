##Description
This project has only the premise of helpe to solve hack puzzle in the Fallot 4 game, so lets start talking about the puzzle
The puzzle is a mine game within the main game, I need to hack a computer and access the data, to do this I need to find a password within the code, the computer gives me many words that I can select and try to use as a password to access it one of them is the correct one, if I make a mistake the computer will tell me how close I got just by telling me the correspondence is the exact combination of the letters and the respective position of this letter in the real password, so knowing this I isolated the possible words in an array and with each attempt my script tells me what the possible answers are among the other untested words
![Fallout4 23_04_2024 21_30_41](https://github.com/NondasNF/fallout-hack-puzzle-script/assets/54701024/f160479c-97df-4069-b1f6-14b0d76a3e2b)

My solution consists of checking the possible solutions based on the first guesses, whenever possible eliminating any word that, based on the previous guess, cannot be the correct answer.
