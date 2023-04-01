namespace EventInspector {

    window.addEventListener('load', handleLoad);


    function handleLoad() {
        let div0: HTMLDivElement = <HTMLDivElement>document.getElementById('div0');
        let div1: HTMLDivElement = <HTMLDivElement>document.getElementById('div1');
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        div0.addEventListener('click', logInfo);
        div0.addEventListener('keyup', logInfo);
        div1.addEventListener('click', logInfo);
        div1.addEventListener('keyup', logInfo);
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('button');
        button.addEventListener('click', customevent);
        document.addEventListener('hi!', output);
    }



    function setInfoBox(_event: MouseEvent) {
        let span: HTMLElement = <HTMLElement>document.getElementById('span');
        let x: number = _event.clientX;
        let x1: number = x + 10;
        let y: number = _event.clientY;
        let y1: number = y + 10;

        span.innerHTML = 'x Position: ' + x + '    y Position: ' + y;
        span.style.position = 'fixed';
        span.style.top = `${y1}px`;
        span.style.left = `${x1}px`;
    }
 
    function logInfo(_event: Event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }



    function customevent(_event: MouseEvent) {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('button');
        let customeventnew = new CustomEvent("hi!", { bubbles: true })
        button.dispatchEvent(customeventnew);
    }

    function output(_event: Event) {
        console.log('hi!');

    }




}