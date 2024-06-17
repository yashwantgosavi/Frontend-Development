// its a lightweight library to write code in js
// makes writing code lot more simpler and easier
// Works around multiple browser
// Created by jogn resig in 2006




// let p = document.getElementById("p");
// p.innerHTML = "Lorem ipsum";

var para = $('p');
para.hide()
$('button').on('click', function (event) {
    para.toggleClass('red');
    para.toggle();

});
