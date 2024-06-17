/* 
## JavaScript - An Introduction
    JavaScript is a text-based programming language used both on the client-side and
    server-side. It allows you to make web pages that are interactive in nature. JavaScript gives
    web pages interactive elements that engage a user. Suppose you want a user to pause or
    play a music video, you need interactive buttons, which send the command of pausing and
    playing to your website. Common examples of JavaScript that you might use every day
    include the search box on Amazon, songs on music websites or a profile search box on
    Instagram.
    To recap, JavaScript adds a certain behavior to your websites.
    For many years, JavaScript was only functionable on some browsers. Microsoft's Internet
    Explorer had no support for JavaScript until much later. Instead, Microsoft created its own
    proprietary client-side script called JScript. In the early days of Web development,
    programmers who wished to create dynamic websites were often forced to choose one
    browser family over the other. This was less than ideal because it made the Internet less
    universally accessible.

    JavaScript was invented by Brendan Eich in 1995.
    It was developed for Netscape 2, and became the ECMA-262 standard in 1997.
    After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser. Mozilla's latest version was 1.8.5. (Identical to ES5).
    Internet Explorer (IE4) was the first browser to support ECMA-262 Edition 1 (ES1).


## What can it do for you?
    1. JavaScript loads content into the document (DOM) if and when the user needs it,
    without having the need to reload the entire web page — this is commonly referred
    to as Ajax. (You will learn this soon enough)

    2. JavaScript can test for what is possible in your browser and react accordingly — this
    is called Principles of unobtrusive JavaScript. It is also known as defensive scripting.

    3. JavaScript can help fix browser problems or patch holes in browser support.
    Common use of this is fixing CSS.

    4. While JavaScript is a client-side language, some of its most powerful features involve
    asynchronous interaction with a remote server. Asynchronous simply means that
    JavaScript is able to communicate with the server in the background without
    interrupting the user interaction taking place in the foreground.
    Take a search engine for example. Today, search engines almost all have an
    autocomplete function. The user begins typing a word into the search box and a list
    of possible search terms or phrases appears below. The experience is seamless.
    Suggested search terms appear without reloading the page.
    In the background, JavaScript reads the letters as the user types, sends those letters
    to a remote server and the server sends suggestions back.
    The software on the server side analyzes the words and runs algorithms to
    anticipate the user's search term. Such programs are diabolically large and complex.
    The JavaScript on the client's machine is as simple and small as possible so as not to
    slow down the user's interaction. The communication between JavaScript and the
    server-side program is limited by the user's bandwidth. This is why developers
    prioritize efficiency in JavaScript functions and make the amount of data
    communicated between the programs as small as possible.
    Only once the user selects a search term does the entire page reload and produce
    the search results. Engines such as Google have reduced or eliminated the need to
    reload, even for that step. They simply produce results using the same
    asynchronous process.

## JS DATA TYPES
    There are 7 data types available in JavaScript. You need to remember that JavaScript is
    loosely typed(or dynamic language), so any value can be assigned to variables in
    JavaScript.

        According to latest ECMAScript standard there are 6 primitive data types and 1 object -
            ● Number - represents integer and floating values
            ● String - represents textual data
            ● Boolean - logical entity with values as 'true' and 'false'
            ● Undefined - represents variable whose value is not yet assigned
            ● Null - represents intentional absence of value
            ● Symbol - represents unique value
            ● Object - represents key value pair


S.No. Data Type Return value of ‘typeof’
            1. Number “number”
            2. String “string”
            3. Boolean “boolean”
            4. Undefined “undefined”
            5. Null “object”
            6. Symbol “symbol”
            7. Object “object”


OPERATORS IN JS
    Operators are used to perform some action on operands. Operand can be of any data
    type, eg. number, boolean, string, etc..

*/