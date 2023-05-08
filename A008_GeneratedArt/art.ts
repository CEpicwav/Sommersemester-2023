namespace GeneratedArt {

    /*
    Aufgabe: <L004 A004_toDoApp>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <16.04.2023>
    */

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener('load', handleload);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleload() {
        canvas = <HTMLCanvasElement>document.querySelector("#mycanvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas!.getContext("2d")
        console.log("Iamhereeee");
        changeColor();
        getRandomNumber;
        drawBackground();
        drawCircles({ x: 500, y: 125 }, { x: 100, y: -100 });
        drawElipse({ x: 500, y: 125 }, { x: 300, y: -300 });
        drawTriangle({ x: 500, y: 125 }, { x: 1000, y: -500 });
        drawCurvy({ x: 500, y: 125 }, { x: 1000, y: -500 })
        drawLine({ x: 500, y: 125 }, { x: 1000, y: -500 })
        drawParticle({ x: 500, y: 125 }, { x: 1000, y: -500 });
        drawCurve({ x: 500, y: 125 }, { x: 1000, y: -500 });



    }
    function getRandomNumber(_max: number, _min: number = 0): number {
        return Math.floor(Math.random() * _max) + _min;
    }

    function changeColor(): string {
        const intensity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
        let randomColor1 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor2 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor3 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor4 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor5 = intensity[Math.floor(Math.random() * intensity.length)];
        let randomColor6 = intensity[Math.floor(Math.random() * intensity.length)];
        const randomColor: string = `#${randomColor1}${randomColor2}${randomColor3}${randomColor4}${randomColor5}${randomColor6}`;
        crc2.fillStyle = "randomColor";
        console.log(randomColor);

        return randomColor;
    }

    function drawBackground() {
        document.body.style.background = changeColor()
    }


    function drawTriangle(_position: Vector, _size: Vector): void {
        crc2.beginPath();
        let triangleX0: number = getRandomNumber(crc2.canvas.width);
        let triangleY0: number = getRandomNumber(crc2.canvas.height);
        let triangleX1: number = getRandomNumber(crc2.canvas.width);
        let triangleY1: number = getRandomNumber(crc2.canvas.height);
        crc2.moveTo(getRandomNumber(triangleX0), getRandomNumber(triangleY0));
        crc2.lineTo(getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height));
        crc2.lineTo(triangleX1, triangleY1);
        crc2.closePath();
        crc2.fillStyle = changeColor();

        crc2.fill();
    }

    function drawElipse(_position: Vector, _size: Vector): void {
        crc2.beginPath();
        let circx1: number = getRandomNumber(crc2.canvas.width)
        let circy1: number = getRandomNumber(crc2.canvas.height)
        let circxr1: number = getRandomNumber(500, 125)
        let circyr1: number = getRandomNumber(500, 125)

        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2)
        crc2.fillStyle = changeColor();
        crc2.fill();
    }

    function drawCircles(_position: Vector, _size: Vector): void {
        crc2.beginPath();
        let circx1: number = getRandomNumber(crc2.canvas.width)
        let circy1: number = getRandomNumber(crc2.canvas.height)
        let circxr1: number = getRandomNumber(500, 125)
        let circyr1: number = circxr1

        crc2.ellipse(circx1, circy1, circxr1, circyr1, Math.PI / 4, 0, Math.PI * 2)
        crc2.fillStyle = changeColor();
        crc2.fill();
    }

    function drawLine(_position: Vector, _size: Vector) {
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height));
        crc2.rotate(getRandomNumber(500, 400))
        crc2.strokeStyle = changeColor();
        crc2.lineWidth = getRandomNumber(10, 1)
        crc2.stroke();
        crc2.closePath();
    }

    function drawCurve(_position: Vector, _size: Vector) {
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height);
        crc2.bezierCurveTo(getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height),
            getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height),
            getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height));
        crc2.rotate(getRandomNumber(500, 400))
        crc2.strokeStyle = changeColor();
        crc2.lineWidth = getRandomNumber(10, 1)
        crc2.stroke();
        crc2.closePath();
    }

    function drawCurvy(_position: Vector, _size: Vector) {
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height);
        crc2.bezierCurveTo(getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height),
            getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height),
            getRandomNumber(crc2.canvas.width), getRandomNumber(crc2.canvas.height));

        crc2.fillStyle = changeColor();
        crc2.lineWidth = getRandomNumber(10, 1)
        crc2.fill();
        crc2.closePath();
    }


    function drawParticle(_position: Vector, _size: Vector): void {
        let nParticles: number = 5;
        let particle: Path2D = new Path2D();
        let radiusParticle: number = 4;

        particle.arc(5, 5, radiusParticle, 5, 5 * Math.PI);
        crc2.fillStyle = changeColor();
        crc2.rotate(getRandomNumber(400, 400))
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            let x: number = (Math.random() - 1) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.save();
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

    }
}