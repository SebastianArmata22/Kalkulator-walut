let inputCash= document.getElementById('inputNumber');

async function getData(){
let response= await fetch('http://api.currencylayer.com/live?access_key=dc8f73f0290aeec2c1465f4cc1c9a5ac');
let data = await response.json();
let xxx= data.quotes.USDPLN;
document.getElementById('outputNumber').innerHTML=xxx;
}


getData();