const inputCash= document.getElementById('inputNumber');
const euroBtn=document.getElementById('euro');
const dolarBtn=document.getElementById('dolar');
const frankBtn=document.getElementById('frank');
const outputCash=document.getElementById('outputNumber');

let choice;
const euro=4.62;
const dolar=3.93;
const frank=4.31;

function checkCurrency(element){
element.classList.add("btn");
if(element.id=='euro'){
    dolarBtn.classList.remove("btn");
    frankBtn.classList.remove("btn");
}else if(element.id=='dolar'){
    euroBtn.classList.remove("btn");
    frankBtn.classList.remove("btn");
}else if(element.id=='frank'){
    dolarBtn.classList.remove("btn");
    euroBtn.classList.remove("btn");
}
choice=element.id;
}

function getData(){
    if(choice=='euro')
    {
        outputCash.innerHTML=inputCash.value*euro;
    }else if(choice=='dolar')
    {
        outputCash.innerHTML=inputCash.value*dolar;
    }else if(choice=='frank')
    {
        outputCash.innerHTML=inputCash.value*frank;
    }

}

function showMenu()
{
const menu=document.getElementById("menu");
if(menu.style.display=='none'){
    menu.style.position='absolute';
    menu.style.background='white';
    menu.style.display='block';
}else{
    menu.style.display='none';
}

}
