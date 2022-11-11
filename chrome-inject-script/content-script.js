if (typeof init == 'undefined'){
    const init = function(){
        const injectElement = document.createElement('div');
        injectElement.className = 'rustyZone-element';
        injectElement.innerHTML = 'Hello from the Rusty Zone Element';
        document.body.appendChild(injectElement);
    }
    init();
}