const inputCash= document.getElementById('inputNumber');
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
        let currency=targetCurrency.options[targetCurrency.selectedIndex].value;
        if(currency=='PLN')
        outputCash.innerHTML=inputCash.value* response.rates.PLN;
        else if(currency=='EUR')
        outputCash.innerHTML=inputCash.value* response.rates.EUR;
        else if(currency=='GBW')
        outputCash.innerHTML=inputCash.value* response.rates.GBW;
        else if(currency=='CHF')
        outputCash.innerHTML=inputCash.value* response.rates.CHF;
        else if(currency=='CZK')
        outputCash.innerHTML=inputCash.value* response.rates.CZK;

    })
}

function showMenu()
{
const menu=document.getElementsByClassName("list");
}
