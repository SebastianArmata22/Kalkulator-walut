let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

function cos(){
    fetch("http://api.currencylayer.com/live?access_key=dc8f73f0290aeec2c1465f4cc1c9a5ac")
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
}
cos();
