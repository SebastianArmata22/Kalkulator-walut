endpoint = 'live'
access_key = 'dc8f73f0290aeec2c1465f4cc1c9a5ac';

// get the most recent exchange rates via the "live" endpoint:
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