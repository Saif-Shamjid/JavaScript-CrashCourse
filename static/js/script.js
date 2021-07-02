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
    // console.log(yourChoice.id);
    humanChoice = yourChoice.id;
    var botAsist = ['rock','paper','scissors'];
    botChoice = botAsist[Math.floor(Math.random()*botAsist.length)];
    // result = decideWinner(humanChoice,botChoice); //return [0,1] human lose, bot win
    // ansText = ansText(result); //{'message': 'you win', 'color': 'green'}
    // rpsFontEnd(humanChoice,botChoice,ansText);
    
    // mine!
    result = decideWinner(humanChoice,botChoice); // 0(for human win) 1(for bot win) 1.5
    mainAnsText = ansText(result); //'you win'
    mainAnsColor = ansColor(result); 
    rpsFontEnd(humanChoice,botChoice,mainAnsText,mainAnsColor);

    // console.log(botChoice);
    // console.log(result);
    // console.log(mainAnsText);
    // console.log(mainAnsColor);
}

function decideWinner(hc,bc) {
    if (hc==bc) {
        return 1.5;
    }
    else if (hc=="rock" && bc=="paper") {
        return 1;
    }

    else if(hc=="rock" && bc=="scissors") {
        return 0;
    }

    else if (hc=="paper" && bc=="rock") {
        return 0;
    }

    else if (hc=="paper" && bc=="scissors") {
        return 1;
    }
    else if (hc=="scissors" && bc=="rock") {
        return 1;
    }
    else if (hc=="scissors" && bc=="paper") {
        return 0;
    }
}

function ansText(r) {
    if (r==0) {
        return "you win!";
    }
    else if (r==1) {
        return "you lose!";
    }
    else{
        return "Match tie";
    }
}

function ansColor(r) {
    if (r==0) {
        return "green";
    }
    else if (r==1) {
        return "red";
    }
    else{
        return "yellow";
    }
}

function rpsFontEnd(hc,bc,mt,mc){

    var ans = document.createElement('h2');
    var tAns = document.createTextNode(mt)
    ans.appendChild(tAns);
    ans.style.color=mc;
    ans.setAttribute('id','rpc-ans')
    var rock = document.getElementById('rock')
    var paper = document.getElementById('paper')
    var scissors = document.getElementById('scissors')
    rock.remove();
    paper.remove();
    scissors.remove();
    var contHc = document.getElementById('hc');
    var contMa = document.getElementById('ma');
    var contBc = document.getElementById('bc');

    
    if (hc=='rock') {
        contHc.appendChild((rock.cloneNode(true)))
    }
    else if (hc=='paper') {
        contHc.appendChild((paper.cloneNode(true)));
    }
    else if(hc=='scissors'){
        contHc.appendChild((scissors.cloneNode(true)));
    }

    contMa.appendChild(ans);

    if (bc=='rock') {
        contBc.appendChild((rock.cloneNode(true)));
    }
    else if (bc=='paper') {
        contBc.appendChild((paper.cloneNode(true)));
    }
    else if(bc=='scissors'){
        contBc.appendChild((scissors.cloneNode(true)));
    }
    
    document.getElementById('rock').removeAttribute('onclick');
    document.getElementById('paper').removeAttribute('onclick');
    document.getElementById('scissors').removeAttribute('onclick');


}

