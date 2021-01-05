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
        let money;
        if(currency=='PLN')
            money=inputCash.value* response.rates.PLN;
        else if(currency=='EUR')
            money=inputCash.value* response.rates.EUR;
        else if(currency=='GBP')
            money=inputCash.value* response.rates.GBP;
        else if(currency=='CHF')
            money=inputCash.value* response.rates.CHF;
        else if(currency=='CZK')
            money=inputCash.value* response.rates.CZK;

            outputCash.classList.add("add-class");
        if(targetCurrency.options[targetCurrency.selectedIndex].value!=initialCurrency.options[initialCurrency.selectedIndex].value)
        outputCash.innerHTML=Math.round(money*100)/100;
        else
        outputCash.innerHTML=inputCash.value;
    })
}

function showMenu()
{
const menu=document.getElementsByClassName("list");
}
