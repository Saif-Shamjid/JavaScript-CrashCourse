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