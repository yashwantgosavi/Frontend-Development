// https://regexr.com/

/*
/pattern/modifiers;

In JavaScript, regular expressions are often used with the two string methods: search() and replace().

*/


function formValidation() {
    let passField = document.getElementById('pass');

    const passError = document.getElementById('passError');
    passError.textContent = '';
    let passwordExpressions = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


    if (passwordExpressions.test(passField)) {
        console.log("write password");
    }




}





