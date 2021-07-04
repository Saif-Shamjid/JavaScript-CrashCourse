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
    document.getElementById('rps-reset').setAttribute('onclick',`rpsResetClickHandler()`);
    // console.log(yourChoice.id);
    humanChoice = yourChoice.id;
    var botAsist = ['rock','paper','scissors'];
    botChoice = botAsist[Math.floor(Math.random()*botAsist.length)];
    result = decideWinner(humanChoice,botChoice); //return [0,1] human lose, bot win
    ansText = finalResult(result); //{'message': 'you win', 'color': 'green'}
    rpsFontEnd(humanChoice,botChoice,ansText);
    
    // for dBUg
    // console.log(humanChoice);
    // console.log(botChoice);
    // console.log(result);
    // console.log(ansText);
    
    
}

function decideWinner(hc,bc) {
    dataBase = {
        'rock':{'rock':1.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':1.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':1.5}

    };
    yourScore = dataBase[hc][bc];
    botScore = dataBase[bc][hc];
    return [yourScore,botScore];
}

function finalResult([hc,bc]) {
    if (hc==0) {
        return {'message': 'You lose', 'color': 'red'};
    } else if (hc==1.5) {
        return {'message': 'Match tie', 'color': 'yellow'};
    }
    else{
        return {'message': 'You Win', 'color': 'green'};
    }
}

function  rpsFontEnd(hc,bc,mst) {
    imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    if (mst['color']=='green') {
        var shadow_cls_h = 'rpc-win';
        var shadow_cls_b = 'rpc-lose';
    }
    else if (mst['color']=='yellow') {
        var shadow_cls_h = 'rpc-tie';
        var shadow_cls_b = 'rpc-tie';
    }
    else{
        var shadow_cls_h = 'rpc-lose';
        var shadow_cls_b = 'rpc-win';
    }

    // Removing all eliment:

    document.getElementById('hc').remove();
    document.getElementById('bc').remove();
    document.getElementById('ma').remove();

    // Creating div
    var hud = document.createElement('div');
    hud.setAttribute("id", "jshd");
    var mad = document.createElement('div');
    mad.setAttribute("id", "jsmad");
    var bud = document.createElement('div');
    bud.setAttribute("id", "jsbd");
    

    hud.innerHTML = `<img class="${shadow_cls_h}" src="${imageDataBase[hc]}" height="150" width="173.734">`;

    mad.innerHTML = `<h1 style="color:${mst['color']}; font-size:60px; padding:30px;">${mst['message']}</h1>`;

    bud.innerHTML = `<img class="${shadow_cls_b}" src="${imageDataBase[bc]}"height="150" width="173.734">`;


    document.getElementById('rpcc').appendChild(hud);
    document.getElementById('rpcc').appendChild(mad);
    document.getElementById('rpcc').appendChild(bud);
    
}

function rpsResetClickHandler(mih,mib,mim){
    document.getElementById('jshd').remove();
    document.getElementById('jsmad').remove();
    document.getElementById('jsbd').remove();
    document.getElementById('rps-reset').removeAttribute('onclick');
 
    var mih = document.createElement('div');
    mih.setAttribute("id","hc");
    var mib = document.createElement('div');
    mib.setAttribute("id","ma");
    var mim = document.createElement('div');
    mim.setAttribute("id","bc");

    mih.innerHTML = `<img class="all-button" id="rock" src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png" height="150" onclick="rpsGame(this)">`;
    mib.innerHTML = `<img class="all-button" id="paper" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCmaf-HaltNtvmtB6EG8jCjkbICmErLjlvACv-XM1yXMDVN5Tk_FJOKYdlGNCYaihdBk&usqp=CAU" height="150" onclick="rpsGame(this)">`;
    mim.innerHTML = `<img class="all-button" id="scissors" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGl8rflKvOAtHGAeTbVNihckaeR8d_FOdrXqpNAQJvsDbMfZm5DcpdB3P_7FGsOqU90o&usqp=CAU" height="150" onclick="rpsGame(this)">`;


    document.getElementById('rpcc').appendChild(mih);
    document.getElementById('rpcc').appendChild(mib);
    document.getElementById('rpcc').appendChild(mim);
    
}



// Challenge 4: Change the color of all button!

var allButton = document.getElementsByTagName('button');
var allButtonClass = [];
for (let i = 0; i <allButton.length; i++) {
   allButtonClass.push(allButton[i].classList[1]);
}
// console.log(allButtonClass);


function buttonColorChange(selectedButton){
    if (selectedButton.value ==='red') {
        changeButtonColorRed();
    } else if (selectedButton.value==='green') {
        changeButtonColorGreen();
    } else if(selectedButton.value==='reset'){
        changeButtonColorReset();
    } else if(selectedButton.value==='random'){
        changeButtonColorRandom();
    }
}

function changeButtonColorRed(){
    var allButtonForReset = document.getElementsByTagName('button');
     for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButtonForReset[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }    
    document.getElementById('rps-reset').style.backgroundColor='rgb(220, 53, 69)';
}

function changeButtonColorGreen() {
    var allButtonForReset = document.getElementsByTagName('button');
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButtonForReset[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }    
    document.getElementById('rps-reset').style.backgroundColor='#198754';
}

function changeButtonColorReset() {
    var allButtonForReset = document.getElementsByTagName('button');
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButtonForReset[i].classList[1]);
        allButton[i].classList.add(allButtonClass[i]);
    }
    document.getElementById('rps-reset').style.backgroundColor='rgb(220, 53, 69)';
}

function changeButtonColorRandom(){
    var allButtonForReset = document.getElementsByTagName('button');
    for (let i = 0; i < allButton.length; i++) {
        var randomColorAssist = ['btn-primary','btn-danger','btn-warning','btn-success'];
        botColorChoice = randomColorAssist[Math.floor(Math.random()*randomColorAssist.length)];
        allButton[i].classList.remove(allButtonForReset[i].classList[1]);
        allButton[i].classList.add(botColorChoice);
    }
    var randomColorAssist2 = ['rgb(220, 53, 69)','#0d6efd','#198754','#ffc107'];
    botColorChoice2 = randomColorAssist2[Math.floor(Math.random()*randomColorAssist2.length)];

    document.getElementById('rps-reset').style.backgroundColor=botColorChoice2;
}

// background-color: rgb(220, 53, 69); red
// blue background-color: #0d6efd;
// yellow background-color: #ffc107;
// green background-color: #198754;
