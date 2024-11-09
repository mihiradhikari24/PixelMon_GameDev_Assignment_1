# PixelMon_GameDev_Assignment_1

Welcome to the Coin Collector Game! This is a simple arcade-style game built with Phaser 3 where players control a character to collect coins on a randomly generated map. Any contact with the girl sprite causes you to die and hence game over :((

Try to get as much score as possible whilst avoiding girls!!

## Game Features

Player Controls: Move the player using arrow keys.

Coins: Collect coins to increase your score.

Obstacles: Avoid girl sprite, or it's game over!

Score Tracking: Keep track of your current score. Each collected coin is worth 10 points.

High Score: The game saves the highest score between sessions using localStorage.

Dynamic Coin Generation: Only 10 coins are visible at a time, with each collected coin immediately replaced by another.

## How to Play

Controls: Use the arrow keys to move the character up, down, left, or right.

Objective: Collect as many coins as possible without hitting a bump.

Each coin collected adds 10 points to your score.

Your highest score is displayed and stored in localStorage to persist across game sessions.

Game Over: If the player collides with a bump, the game ends, and the page reloads, resetting the score but keeping the highest score.

## Customization

Number of Coins: Adjust the number of visible coins by changing the number in the generateCoins(10) function call in game.js.

Obstacles: Adjust the number or placement of bumps by modifying the loop within the create() function where bumps are generated. 

Sprites: use your own images to act as bumps, coins or main character

## Further Upgrades

Initial Page: I'm planning to add an initial page which contains previous top 5 high scores, character select and other features and also a play button which starts the game

Character Selection: I'm planning to add this in inital screen where you can select between Ash, Serena or Biker!!

Enemies: Mario styed enemies which move in a certain line or pattern and if you have contact with them, its game over

Shooters: Another variation of enemies which may be a machine or an actual npc which shoots you and if you get shot twice, its game over. Might look like contra shooters

ps:- I'm sorry but it took me a lot of time finding sprites and maps and all so I haven't implemented anything fancy or solid, I'll improve up on this but I learnt a lot doing this assignment and I'll keep working better as I really wish to make a functional pokemon game
