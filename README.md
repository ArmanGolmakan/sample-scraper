### Template project for basic web scraping using: Node, Express, Cheerio



 `$("*") — selects all elements`
 
 `$("#first") — selects the element with id="first"`
 
 `$(".intro") — selects all elements with class="intro"`
 
 `$("div") — selects all <div> elements`
 
 `$("h2, div, p") — selects all <h2>, <div>, <p> elements`
 
 `$("li:first") — selects the first <li> element`
 
 `$("li:last") — selects the last <li> element`
 
 `$("li:even") — selects all even <li> elements`
 
 `$("li:odd") — selects all odd <li> elements`
 
 `$(":empty") — selects all elements that are empty`
 
 `$(":focus") — selects the element that currently has focus`
 
<br/><br/>

to debug using chrome dev tool:

`node --inspect server.js`

in chrome tab: `chrome://inspect`

click: `Open deciated dev tools for node`

<br/>

_Cheerio_ implements the core of jQuery designed for the server.
