const inputCash= document.getElementById('inputNumber');
const euroBtn=document.getElementById('euro');
const dolarBtn=document.getElementById('dolar');
const frankBtn=document.getElementById('frank');
const outputCash=document.getElementById('outputNumber');
const initialCurrency=document.getElementById('initialCurrency');

let choice;
const euro=4.62;
const dolar=3.93;
const frank=4.31;
choice='euro';
let getStartupCurrency=()=>{
    return initialCurrency.options[initialCurrency.selectedIndex].value;
}
function getData(){
    
    fetch(`https://api.exchangeratesapi.io/latest?base=${getStartupCurrency}`)
    .then(response => response.json())
    .then(response => {
        if(choice=='euro')
        {
            outputCash.innerHTML=inputCash.value*response.rates.EUR+" €";
        }else if(choice=='dolar')
        {
            outputCash.innerHTML=inputCash.value*response.rates.USD + " $";
        }else if(choice=='frank')
        {
            outputCash.innerHTML=inputCash.value*response.rates.CHF + " CHF";
        }
    })
}

function showMenu()
{
const menu=document.getElementsByClassName("list");
}
