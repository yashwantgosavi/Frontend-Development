function breedList(){
    $.ajax({
        url:'https://dog.ceo/api/breeds/list/all',
        method:'GET',
        success: function(data){
            {
                var breedListItem = data.message;
               $('#dropdown option').attr('value', breedListItem);
            }
        }
    })
    };
    
    $("#dropdown").click(breedList);