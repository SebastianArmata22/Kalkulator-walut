let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

from = 'EUR';
to = 'GBP';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
                
    }
});