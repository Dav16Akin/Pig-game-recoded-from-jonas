// let random = Math.floor( Math.random() * 6) + 1;

// console.log(random);

const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 =document.querySelector('#score--1');
const newGame = document.querySelector('.btn--new');

rollDice.addEventListener('click' , diceRoll);



let currentScore , active ,scores, isPlaying;
init();




function diceRoll () {
    if (isPlaying) {
        let random = Math.floor( Math.random() * 6) + 1;
    
        dice.src = 'dice-' + random + '.png'
    
        dice.style.display = 'block';
    
        if (random !== 1) {
            let currentDOM = document.querySelector('#current--' + active);
            currentDOM.textContent = currentScore += random;
        }else {
            nextPlayer();
        }
    }


};



document.querySelector('.btn--hold').addEventListener('click' , function() {
    scores[active] += currentScore

    document.querySelector('#score--' + active).textContent = scores[active]

    

    if (scores[active] >= 100) {
        document.querySelector('#name--' + active).textContent = 'WINNER';
        document.querySelector('.player--' + active).classList.add('player--winner');
        currentScore = 0;
        dice.style.display = 'none';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        isPlaying = false;
        
        


    }else {
        nextPlayer();
    }
    
})

function nextPlayer () {

    if (isPlaying) {
        if (active === 0) { 
            active = 1;
        }else {
            active = 0;
        }
    
        currentScore = 0;
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
    
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
    
        dice.style.display = 'none';
    }


}

newGame.addEventListener('click',function() {
    document.querySelector('.player--' + active).classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('#name--' + active).remove.textContent = 'WINNER'
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';


    init();

})


function init () {
    isPlaying = true;
    scores = [0,0];
    currentScore = 0;
    active = 0;
    dice.style.display = 'none';
    score0.textContent = '0'
    score1.textContent = '0'
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
}




