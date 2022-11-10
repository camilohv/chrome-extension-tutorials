    function injectedFunction() {
        document.body.style.backgroundColor = 'orange';
    }
  
    chrome.action.onClicked.addListener((tab) => {
        console.log(chrome.storage)
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: injectedFunction
        });
    });
        