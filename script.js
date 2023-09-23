'use strict';

// changing the total score to 0
const player0score = document.getElementById('score--0');
const player1score = document.getElementById('score--1');
//
//
//
//
// we create variable for dice
const dice = document.querySelector('.dice');

//
//
//
// roll dice button
const roll = document.querySelector('.btn--roll');
// hold button
const hold = document.querySelector('.btn--hold');
// new game button
const newGame = document.querySelector('.btn--new');
//
//
//
//create a variable for current score
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
//

//
//
let totalScore, activePlayer, current, active;
//
//
// initialization function is created
const init = function () {
  // total score array
  totalScore = [0, 0];
  //active player
  activePlayer = 0;
  // current score
  current = 0;
  // conditions for the button to press
  active = true;
  // hiding the dice img
  dice.classList.add('hidden');
  // setting players score which is the total score to 0
  player0score.textContent = 0;
  player1score.textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.getElementById(`current--0`).textContent = current;
  document.getElementById(`current--1`).textContent = current;
};
//
//
init();
// roll dice button put in a function

roll.addEventListener('click', function () {
  if (active) {
    // get the random number
    let random = Math.trunc(Math.random() * 6) + 1;

    // assign the random number to dice picture
    dice.src = `dice-${random}.png`;

    // display dice image
    document.querySelector('.dice').classList.remove('hidden');

    // checking if the dice number is 1
    if (random !== 1) {
      // add the dice number to current score
      current += random;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      // current score is returned to 0
      current = 0;
      document.getElementById(`current--${activePlayer}`).textContent = current;
      // we switch players
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.getElementById(`current--${activePlayer}`).textContent;

      // switch player color is implimented
      document.querySelector(`.player--0`).classList.toggle('player--active');
      document.querySelector(`.player--1`).classList.toggle('player--active');
    }
  }
});
// hold dice button
hold.addEventListener('click', function () {
  totalScore[activePlayer] += current;
  // condition to check if the total score is up to 100
  if (totalScore[activePlayer] >= 100) {
    // the active player won
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    // dice is hidden again when any player win
    document.querySelector('.dice').classList.add('hidden');
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    //

    // we create a condition that will amke all the button unclickable
    active = false;
  } else {
    // if the totalscore is not up to 100 the game continues
    // current score is added to the total score
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    // current score is returned to 0
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;

    // player is switched
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent;
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
  }
});

// new game button
newGame.addEventListener('click', init);
