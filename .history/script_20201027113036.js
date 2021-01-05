let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

function cos(){


    fetch("http://api.currencylayer.com/live?access_key=dc8f73f0290aeec2c1465f4cc1c9a5ac")
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`Http error: ${response.status}`);
            //lub za pomocą Promise.reject()
            //return Promise.reject(`Http error: ${response.status}`)
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error(error)
    });
}
cos();
