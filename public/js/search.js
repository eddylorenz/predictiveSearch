upKeyCode = '37';
downKeyCode = '38';
rightKeyCode = '39';
leftKeyCode = '40';

function searchPredictive (formId, queryId, event) {
    console.log('SearchPredictive Function');

    if ( event.keyCode ==  upKeyCode ||
         event.keyCode == downKeyCode ||
         event.keyCode == rightKeyCode ||
         event.keyCode == leftKeyCode ) {
        return;
    }

    if ( $('#' + formId + ' #' + queryId).val().length >= 3) {
        console.log('More than 3 characters');
        var availableTags = [];

        console.log('Send request');

        $.ajax({
            type: "GET",
            url: "/api/search/predict/" + $('#' + queryId).val(),
            success: function(response) {
                console.log('Recived request');
                console.log(response);
                console.log(response.state);
                console.log(response.data);
                switch (response.state) {
                    case "200 OK":
                        availableTags = response.data;
                        console.log('Successfull response');
                        console.log(availableTags);
                        break;
                    default:
                        console.log("Error requesting");
                        break;
                }
                console.log('Loading autocomplete');
                $('#' + queryId).autocomplete({
                    source: availableTags,
                    autoFocus: true
                });
            },
            error:function() {
               alert ('Server did not response. Contact to system manager.')
            }
        });
    }
}