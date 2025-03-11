const maxTips = 20;
const randomNum = getRandomIntInclusive(0, 1000000);
let currentTipCount = 0;

console.log("Találd ki a random számot, max 20 tip");

while(currentTipCount < maxTips){
    console.log('Tipjeid: ', currentTipCount);
    let tip = parseInt(prompt("Adj meg egy számot"));
    if (isNaN(tip)) {
        alert("Számot adj meg");
        continue;
    }
    if (tip == randomNum) {
        alert("Eltaláltad a számot, gratulálok");
        break;
    } else if(tip > randomNum){
        alert("A random szám kisebb");
    }else{
        alert("A random szám nagyobb");
    }
    currentTipCount++;
}
alert(`Nem sikerült eltalálnod, a szám ${randomNum} volt`);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}