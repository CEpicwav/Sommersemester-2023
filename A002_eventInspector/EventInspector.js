var EventInspector;
(function (EventInspector) {
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        let div0 = document.getElementById('div0');
        let div1 = document.getElementById('div1');
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        div0.addEventListener('click', logInfo);
        div0.addEventListener('keyup', logInfo);
        div1.addEventListener('click', logInfo);
        div1.addEventListener('keyup', logInfo);
        let button = document.getElementById('button');
        button.addEventListener('click', customevent);
        document.addEventListener('hi!', output);
    }
    function setInfoBox(_event) {
        let span = document.getElementById('span');
        let x = _event.clientX;
        let x1 = x + 10;
        let y = _event.clientY;
        let y1 = y + 10;
        span.innerHTML = 'x Position: ' + x + '    y Position: ' + y;
        span.style.position = 'fixed';
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customevent(_event) {
        let button = document.getElementById('button');
        let customeventnew = new CustomEvent("hi!", { bubbles: true });
        button.dispatchEvent(customeventnew);
    }
    function output(_event) {
        console.log('hi!');
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map