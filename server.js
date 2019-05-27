var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scraper', function (req, res) {

    url = 'https://docs.angularjs.org/tutorial';

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var json = {txt : ''};

            $('head').filter(function () {
                // var data = $(this);
                json.txt = this.namespace;
            })

        }

        // Parameter 1 :  output.json - name of file which will get created
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {

            console.log('File successfully written! - Check your project directory for the output.json file');

        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send('Check your console!')

    });
})
app.listen('8081');
console.log('Listening on port 8081. do node --inspect server.js to do chrome debugging');
exports = module.exports = app;

