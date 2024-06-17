function featchImage() {
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function () {
    //     console.log();
    //     var responseJSON = JSON.parse(xhrRequest.response);
    //     // JSON.stringify
    //     var imageURL = responseJSON.message;
    //     $('#dog-img').attr('src', imageURL);
    // };
    // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    // xhrRequest.send();
    // xhrRequest.onerror = function () {
    //     console.log('error');
    // }

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function (data) {
    //         {
    //             var imageURL = data.message;
    //             $('#dog-img').attr('src', imageURL)
    //         }
    //     }
    // }).fail(function(){
    //     console.log('error');
    // });


    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        var imageURL = data.message;
        $('dog-img').attr('src', imageURL);
    }).fail(function (xhr, textStatus, errorThrown) {
        console.log("Request Failed");
    });



}

$('#featch').click(featchImage);


