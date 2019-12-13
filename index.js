let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let luckyNumber1 = "images/dice"+randomNumber1+".png";
let luckyNumber2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",luckyNumber1);
document.querySelectorAll("img")[1].setAttribute("src",luckyNumber2);

if(luckyNumber1 > luckyNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if(luckyNumber2 > luckyNumber1 ) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}