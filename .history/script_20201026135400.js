let endpoint = 'live';
let access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

 let from = 'EUR';
let to = 'GBP';
let amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
    }
});
$.ajax({
    url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // exchange rata data is stored in json.quotes
        alert(json.quotes.USDGBP);
        
        // source currency is stored in json.source
        alert(json.source);
        
        // timestamp can be accessed in json.timestamp
        alert(json.timestamp);
        
    }
});