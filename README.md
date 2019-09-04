# unit-4-game

Moon Shot is stylized version of the 'Crystal Collector' game, built leveraging the jQuery library and Bootstrap framework.

It demonstrates the creation and assignment of random numbers to elements, as well as the dynamic manipulation of elements on the DOM.


Game play:  Upon launch, the program generates and displays a random number between 19 and 120 - illustrated as the distance between the Earth and the Moon.

It also assigns a random, and distinct number (between 1 and 12) to 4 triangular 'crystals', although these values are not revealed.

It is the player's job to navigate the shuttle safely from the Earth to the Moon, by selecting the 'power setting' (crystals), thereby adding to their score with the objective of exactly matching the target number.   Only by clicking each crystal will its value be revealed (in terms of the increment to the player's score). 


As you select the crystals, your 'shuttle' will blast across the screen, representing your progress towards the target number.  (This is calibrated, so that the shuttle arrives at the Moon when the target number is reached.)

Match the target number exactly and a success message is shown, and the player's win tally is incremented.

Overshoot, even by 1, and the program will let you know.  A message will be displayed, and the lose tally will be incremented.


The game will then automatically reset, your shuttle will return to Earth, and you can play again.