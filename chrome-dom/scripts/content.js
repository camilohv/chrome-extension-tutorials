// Event listener that reacts to messages sent by the popup
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    console.log(data);

    if (data == "red"){
        document.body.style.backgroundColor = "red"
    }

    if (data == "blue"){
        document.body.style.backgroundColor = "blue"
    }

    /*
    var linksList = document.querySelectorAll('a');
    [].forEach.call(linksList, function(header) {
        header.innerHTML = request.data;
    });*/
    sendResponse({data: data, success: true});
});

