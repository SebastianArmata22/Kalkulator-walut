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
        const currency=targetCurrency.options[targetCurrency.selectedIndex].value;
        const value;
        if(currency=='PLN')
        value=oinputCash.value* response.rates.PLN;
        else if(currency=='EUR')
        value=inputCash.value* response.rates.EUR;
        else if(currency=='GBW')
        value=inputCash.value* response.rates.GBW;
        else if(currency=='CHF')
        value=inputCash.value* response.rates.CHF;
        else if(currency=='CZK')
        value=inputCash.value* response.rates.CZK;

        if(value!='NaN')
        outputCash.innerHTML=value;
    })
}

function showMenu()
{
const menu=document.getElementsByClassName("list");
}
