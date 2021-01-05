let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

 let from = 'EUR';
let to = 'GBP';
let amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'number',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
    }
});