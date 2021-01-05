const inputCash= document.getElementById('inputNumber');
const euroBtn=document.getElementById('euro');
const dolarBtn=document.getElementById('dolar');
const frankBtn=document.getElementById('frank');



function checkEuro(element){
element.classList.toggle("btn");
if(element.id=='euro'){
    dolarBtn.classList.remove("btn");
    frankBtn.classList.remove("btn");
}

}

