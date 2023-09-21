'use strict';

// here i am declaring some variables
const player1Value = document.querySelector('#score--0');
const player2Value = document.querySelector('#score--1');
const image = document.querySelector('.dice');

// here we declare variable to hold all the buttons
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

// here we are creating
let active = 0;

// we declare current score
const currentScore = document.getElementById('current--' + active);

// here we set players value to zero
player1Value.textContent = 0;
player2Value.textContent = 0;

// here we set the value of current score to 0
currentScore.textContent = 0;

// here we created another value that we can use to perform calculations and the assign it to surrent score
let current = 0;

// here we created an element for the total score called total
let total = [0, 0];

// here we removed the dice image by adddng hidden
image.classList.add('hidden');

// we wan to impliment dice roll
roll.addEventListener('click', function () {
  // random number from 1-6 is generated
  let num = Math.trunc(Math.random() * 6) + 1;

  // we assign each number to the dice
  image.src = `dice-${num}.png`;

  // we make dice visible by
  image.classList.remove('hidden');

  // we use if statement to know whether the number is 1 or not
  if (num !== 1) {
    // here we add the dice rolled to the current value
    current = current + num;
    document.getElementById(`current--${active}`).textContent = current;
  } else {
    // here we put conditions when the dice is == 0
    current = 0;
    document.getElementById(`current--${active}`).textContent = current;
    active = active === 0 ? 1 : 0;
    document.getElementById(`current--${active}`).textContent;

    // here we changed the background color of the active player
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document
      .querySelector(`.player--${active}`)
      .classList.add('player--active');
  }
});

// here we implement hold
hold.addEventListener('click', function () {
  // here we assign the value of current score to players score

  total[active] += current;
  document.querySelector(`#score--${active}`).textContent = total[active];

  // here we check if the score is <= 100
  if (document.querySelector(`#score--${active}`).textContent <= 100) {
    // here we set the value of current to 0 and assgn t to current score this will happen when hold is pressed
    current = 0;
    document.getElementById(`current--${active}`).textContent = current;

    // here we used ternary operator to to switch players
    active = active === 0 ? 1 : 0;

    // here we changed the background color of the active player, wefirst checked if anyof the element have the class player--active  and remove it
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    // here we added it to the active player
    document
      .querySelector(`.player--${active}`)
      .classList.add('player--active');
  } else {
    // if the total score is over 100 the active player win, so we have to hide the dice
    image.classList.add('hidden');

    //here we add the class plyerer--winner so the background can change
    document
      .querySelector(`.player--${active}`)
      .classList.add('player--winner');
    document.querySelector(`.player--${active}`).classList.add('name');

    // here we turned off the roll button and also make the dice hide, and also de activate the active players background
    roll.addEventListener('click', function () {
      current = 0;
      document.getElementById(`current--${active}`).textContent = current;
      image.classList.add('hidden');
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    });

    //here we turned off the hold button and also make the dice hide, and also de activate the active players background
    hold.addEventListener('click', function () {
      total[active] += current;
      document.querySelector(`#score--${active}`).textContent = total[active];
      image.classList.add('hidden');
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    });

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
});

newGame.addEventListener('click', function () {
  // here we set the current score to 0
  current = 0;
  document.getElementById('current--0').textContent = current;
  document.getElementById('current--1').textContent = current;

  total[0] = 0;
  total[1] = 0;
  document.querySelector('#score--0').textContent = total[0];
  document.querySelector('#score--1').textContent = total[1];

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  active = 0;
});
