const inputCash= document.getElementById('inputNumber');
const euroBtn=document.getElementById('euro');
const dolarBtn=document.getElementById('dolar');
const frankBtn=document.getElementById('frank');



function checkEuro(element){
element.classList.toggle("btn");
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

}

