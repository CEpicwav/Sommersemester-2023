namespace L08_Luftfahrt_Canvas {

    /*
    Aufgabe: <L008_004_Luftfahrt>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <14.05.2023>
    */

    interface Vector {
        x: number;
        y: number;
    }
    let h: number;
    let s: number;
    let l: number;


    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2.canvas.height);
        console.log(crc2.canvas.width);

        let horizon: number = crc2.canvas.height * golden;

        let posMountains: Vector = { x: 0, y: horizon };
        let posMountain: Vector = { x: 0, y: horizon + 30 };

        drawBackground();
        drawSun({ x: 200, y: 75 });
        drawCloud({ x: 500, y: 100 }, { x: 200, y: 40 });
        drawCloud({ x: 1300, y: 120 }, { x: 100, y: 60 });
        drawMountains(posMountains, 75, 160, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        for (let x: number = 0; x < 25; x++) {
            let randomX: number = Math.random() * crc2.canvas.width;
            let randomY: number = (Math.random() * crc2.canvas.height) - (1 - (crc2.canvas.height * golden));
            drawGras({ x: randomX, y: randomY })
        };
        drawPeople({ x: 763, y: 234 });
        drawMountain(posMountain, 150, 705, "grey", "darkgrey");
        drawPlace({ x: 1010, y: 725 });
        drawTree({ x: 318, y: 832 });
        drawTree({ x: 280, y: 800 });
        drawTree({ x: 242, y: 841 });
        drawBoot({ x: 1020, y: 735 });
        drawPeople({ x: 1440, y: 688 });
        drawPeople({ x: 1480, y: 663 });
        drawPeople({ x: 1400, y: 676 });
        drawPeople({ x: 430, y: 541 });
        drawPeople({ x: 516, y: 594 });
        drawParaglider({ x: 1380, y: 315 });
        drawParaglider({ x: 960, y: 273 });
        drawParaglider({ x: 540, y: 210 });
        drawParaglider({ x: 960, y: 585 });
//Digga ich peil den Fehler nicht vallah billah Marcus bitte erlöse mit mit einem saftigen Döner
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden - 0.01, "white");
        gradient.addColorStop(golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        let r1: number = 40;
        let r2: number = 70;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(40, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "hsla(40, 100%, 50%, 0)");
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    

    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 25;
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            let scale: number = Math.random() * 0.8 + 0.2;
            crc2.translate(x, y);
            crc2.scale(scale, scale);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    };

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);
            y *= 1 + Math.random() * 0.2; // Add random irregularities

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, "lightgrey"); // Add middle color stop
        gradient.addColorStop(1, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawMountain(_position: Vector, _height: number, _width: number, _colorLow: string, _colorHigh: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_height);
        crc2.lineTo(_width, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawGras(_position: Vector): void {
        let size: number = _position.y * _position.y * 0.00008;
        let waveFrequency: number = 3;
        let waveAmplitude: number = 1;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -size);
        crc2.moveTo(0, 0);
        crc2.lineTo(-(size / 4), -(size / 4) * 3);
        crc2.moveTo(0, 0);
        crc2.lineTo(size / 4, -(size / 4) * 3);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -size);
        gradient.addColorStop(0, "darkgreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(-(size / 4), -(size / 4) * 3);

        for (let x = -(size / 4); x < size / 4; x += 0.1) {
            let y: number = -(size / 4) * 3 + Math.sin(x * waveFrequency) * waveAmplitude;
            crc2.lineTo(x, y);
        }

        crc2.lineTo(size / 4, -(size / 4) * 3);
        crc2.closePath();

        let gradientTexture: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -size);
        gradientTexture.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradientTexture.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
        gradientTexture.addColorStop(1, "rgba(0, 0, 0, 0)");

        crc2.fillStyle = gradientTexture;
        crc2.fill();

        crc2.restore();
    };

    function drawPlace(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, r2);

        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    };

    function drawTree(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
    
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -40);
        crc2.lineTo(-10, -40);
        crc2.lineTo(-10, -60);
        crc2.lineTo(10, -60);
        crc2.lineTo(10, -40);
        crc2.lineTo(0, -40);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();
    
        crc2.beginPath();
        crc2.arc(0, -70, 20, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
    
        crc2.beginPath();
        crc2.arc(0, -100, 15, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
    
        crc2.beginPath();
        crc2.arc(0, -120, 12, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();
    
        crc2.restore();
    };
    

    function drawBoot(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        // Ändere die Form des Kiosks
        crc2.beginPath();
        crc2.moveTo(0, -50);
        crc2.lineTo(-25, 0);
        crc2.lineTo(25, 0);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(-25, 0);
        crc2.lineTo(-50, -40);
        crc2.lineTo(50, -40);
        crc2.lineTo(25, 0);
        crc2.closePath();
        crc2.strokeStyle = "red"
        crc2.lineWidth = 4;
        crc2.stroke();

        crc2.restore();
    };

    function drawPeople(_position: Vector, _size: number, _color: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        // Kopf
        crc2.beginPath();
        crc2.arc(0, -_size / 10, _size / 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#f2d1b3";
        crc2.fill();

        // Körper
        crc2.beginPath();
        crc2.moveTo(0, -_size / 3);
        crc2.lineTo(-_size / 4, _size / 2);
        crc2.lineTo(_size / 4, _size / 2);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();

        // Arme
        crc2.beginPath();
        crc2.moveTo(-_size / 4, 0);
        crc2.lineTo(-_size / 2, _size / 4);
        crc2.moveTo(_size / 4, 0);
        crc2.lineTo(_size / 2, _size / 4);
        crc2.strokeStyle = "#704214";
        crc2.lineWidth = 3;
        crc2.stroke();

        // Beine
        crc2.beginPath();
        crc2.moveTo(-_size / 4, _size / 2);
        crc2.lineTo(-_size / 4, _size);
        crc2.lineTo(0, _size * 0.9);
        crc2.moveTo(_size / 4, _size / 2);
        crc2.lineTo(_size / 4, _size);
        crc2.lineTo(0, _size * 0.9);
        crc2.strokeStyle = "#704214";
        crc2.stroke();

        crc2.restore();
    }
    ;

    function drawParaglider(_position: Vector): void {
        const color = "white";
        const width = 50;
        const height = 50;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        // draw paraglider body
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-width / 2, height / 2);
        crc2.lineTo(width / 2, height / 2);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();

        // draw strings
        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(0, height);
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(-width / 2, height / 2);
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(width / 2, height / 2);
        crc2.strokeStyle = "black";
        crc2.stroke();

        // draw pilot
        crc2.beginPath();
        crc2.arc(0, height / 4, height / 8, 0, 2 * Math.PI, true);
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
    };

    //vallah auch hier wo sind die hunde jetzt hin amk



}