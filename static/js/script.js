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

