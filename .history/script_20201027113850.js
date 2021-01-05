let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

async function cos(){
let response= await fetch('http://api.currencylayer.com/live?access_key=dc8f73f0290aeec2c1465f4cc1c9a5ac')
.then(response=>response.json())
.then(data=>data.quotes.USDPLN)
.catch(error=>console.log(error))
document.getElementById('outputNumber').innerHTML=response;
}

cos();
