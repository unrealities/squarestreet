# SquareStreet

This is the client-side of an application that is designed to allow a user to compete in square competitions.

A 10x10 grid is created. The user is then able to select one or more available squares in that grid. 
When the competition has enough participants, the grid is filled with corresponding digits 0...9 for each row and column.
At given stopping points during a game the last two digits of the home and away team are used to located the winning square.

## Architecture

Created using Expo (React-Native)
Designed to speak to a Firebase backend which stores event, game and user data.

## MVP

I would like to first create a simple UX that would...
1. Allow a user to select a square
2. Have the other squares filled at random
3. Have a fake game run
4. Alert the user after each scoring period of the winning number
5. Give a summary upon completion of the event
