var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function (req, res) {

    url = 'https://www.caseware.com';


    request(url, function (error, response, html) {
        if (!error) {
            console.log('initial request completed with no error');
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { txt: "" };

            let mytxt = $('title');
            console.log(mytxt);

        }

 
        

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send('Check your console!')

    });
})

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;