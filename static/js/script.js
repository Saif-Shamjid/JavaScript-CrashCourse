//challenge 1:

function ageInDaysparam() {
    var bornYear = prompt("What year were you born? ");
    var allDays = (2021-bornYear)*365;
    var mainResult = document.createElement('h2');
    var mainTextResult = document.createTextNode('You are '+allDays+' Days old!');
    mainResult.appendChild(mainTextResult);
    mainResult.setAttribute('id','ageInDays-TextResult');
    document.getElementById('ageInDays-result').appendChild(mainResult);
}

function resetAgeInDays() {
    document.getElementById('ageInDays-TextResult').remove();
}

// Challenge 2:

function generateCat() {
    var catImage = document.createElement('img');
    var dev = document.getElementById('cat-gen-container');
    catImage.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    dev.appendChild(catImage);

}

// Challenge 3:

function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    humanChoice = yourChoice.id;
    var botAsist = ['rock','paper','scissors'];
    botChoice = botAsist[Math.floor(Math.random()*botAsist.length)];
    // result = decideWinner(humanChoice,botChoice); //return [0,1] human lose, bot win
    // ansText = ansText(result); //{'message': 'you win', 'color': 'green'}
    // rpsFontEnd(humanChoice,botChoice,ansText);
    
    // mine!
    // result = decideWinner(humanChoice,botChoice); // 0(for human win) 1(for bot win)
    // mainAnsText = ansText(result); //'you win'
    // mainAnsColor = ansColor(mainAnsText); 
    // rpsFontEnd(humanChoice,botChoice,mainAnsText,mainAnsColor);

    console.log(botChoice);
}