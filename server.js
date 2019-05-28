var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scraper', function (req, res) {

    request({
        method: 'GET',
        url: 'https://techcrunch.com/'
    }, function (error, response, html) {

        if (error) return console.error(error);

        const $ = cheerio.load(html);
        //declare the JSON which will hold our results and save it in a text file at the end
        let json = { pageTitle: '', allItems: '' };
        // retrieve the page's title and extract its text and insert it into the JSON
        json.pageTitle = $('title').text();


        //retrieve every single item in the webpage (dont put in json or else json.stringify() won't work)
        const allItems = $('*').get(); //get() will remove some garbage unneeded tags in `allItems` and returns only the nodes we need
        json.allItems = allItems;

        //retrieve only the the <div> tags
        const divTags = allItems.filter((item) => {
            return item.name === 'div';
        });


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

