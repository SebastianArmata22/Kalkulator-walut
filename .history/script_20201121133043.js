const inputCash= document.getElementById('inputNumber');
const euroBtn=document.getElementById('euro');
const dolarBtn=document.getElementById('dolar');
const frankBtn=document.getElementById('frank');
const outputCash=document.getElementById('outputNumber');
const initialCurrency=document.getElementById('initialCurrency');
const targetCurrency=document.getElementById('targetCurrency');


let choice;
const euro=4.62;
const dolar=3.93;
const frank=4.31;
choice='euro';
let getStartupCurrency=()=>{
    return `https://api.exchangeratesapi.io/latest?base=${initialCurrency.options[initialCurrency.selectedIndex].value}`;
}
function getData(){
    
    fetch(getStartupCurrency())
    .then(response => response.json())
    .then(response => {
        outputCash.innerHTML=inputCash.value*response.rates.targetCurrency.options[targetCurrency.selectedIndex].value;

    })
}

function showMenu()
{
const menu=document.getElementsByClassName("list");
}
