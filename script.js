let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loses: 0,
    tie: 0
};

displayScoreInWeb();

/*
if(!score){
    score={
        win:0,
        loses:0, //work same as upper line of code
        tie:0
    };
}
*/

let isautoplaying = false;
let IntervalId = null;
function autoplay() {
    if(!isautoplaying){
       IntervalId = setInterval( ()=> {
        const playermove = computermove();
        playGame(playermove);
      }, 1000);
      isautoplaying = true;
      console.log("Auto Play Started");
    }
    else{
         clearInterval(IntervalId);
         IntervalId= null;
        isautoplaying = false;
        console.log("Auto Play Stopped");
    }
    
}


function computermove() {
    const MathRandom = Math.random();
    let computerMove = '';
    if (MathRandom >= 0 && MathRandom < 1 / 3) {
        computerMove = 'rock';
    }
    else if (MathRandom >= 1 / 3 && MathRandom < 2 / 3) {
        computerMove = 'paper';
    }
    else if (MathRandom >= 2 / 3 && MathRandom < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playermove) {
    let result = '';
    const CompurterMove = computermove();
    if (playermove === 'scissors') {
        if (CompurterMove === 'rock') {
            result = 'Lose';
        }
        else if (CompurterMove === 'paper') {
            result = 'Win';
        }
        else if (CompurterMove === 'scissors') {
            result = 'Tie';
        }
    }
    else if (playermove === 'paper') {
        if (CompurterMove === 'rock') {
            result = 'Win';
        }
        else if (CompurterMove === 'paper') {
            result = 'Tie';
        }
        else if (CompurterMove === 'scissors') {
            result = 'Lose';
        }
    }
    else if (playermove === 'rock') {
        if (CompurterMove === 'rock') {
            result = 'Tie';
        }
        else if (CompurterMove === 'paper') {
            result = 'Lose';
        }
        else if (CompurterMove === 'scissors') {
            result = 'Win';
        }
    }

    if (result === 'Win') {
        score.win += 1;
    }
    else if (result === 'Lose') {
        score.loses += 1;
    }
    else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.move').innerHTML = `You <img src="${playermove}-emoji.png" alt="" class="move-icon">
        
        <img src="${CompurterMove}-emoji.png" alt="" class="move-icon">
        Computer.`;
    displayScoreInWeb();

    /*alert(` you pick ${playermove} . computer pick ${CompurterMove} . ${result}
Wins: ${score.win}, Loses: ${score.loses}, Ties: ${score.tie}
 `);*/
}

function displayScoreInWeb() {
    document.querySelector('.js-score-para').
        innerHTML = `Wins: ${score.win}, Loses: ${score.loses}, Ties: ${score.tie}`;
}

