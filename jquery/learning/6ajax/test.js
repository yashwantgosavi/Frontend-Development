// // https://dog.ceo/api/breeds/image/random

function apiTesting() {
    //     // var xmlRequest = new XMLHttpRequest();
    //     // xmlRequest.onload = function (data) {
    //     //     var resJson = JSON.parse(xmlRequest.response);
    //     //     var imgURL = resJson.message;
    //     //     $('#dog-img').attr('src', imgURL);
    //     // }

    //     // xmlRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
    //     // xmlRequest.send();



    //     $.ajax({
    //         url: 'https://dog.ceo/api/breeds/image/random',
    //         method: 'GET',
    //         success: function(hello){
    //             {
    //                 var imgURL = hello.message;
    //                 $('#dog-img').attr('src', imgURL);
    //             }
    //         }
    //     })
    // 
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5916b3e69msh4206cc72a5f8992p13d80ejsn8e2ed4aa51f4',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};
$('#featch').click(apiTesting);


