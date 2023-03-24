import Point from "./Point.js";

const options = document.getElementById("options");
const optionValues = options.getBoundingClientRect();

const canvas = document.getElementById('canvas');

if(window.innerWidth < 832){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
} else if(window.innerWidth >= 832){
    canvas.width = window.innerWidth - optionValues.width;
    canvas.height = window.innerHeight;
}

let ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);

let points = [];

let timer;

ctx.fillRect(0,0 , 100, 100)

function generatePoints(){
    clearInterval(timer);

    let n = 0;
    let c = 10;
    let theta = 137.5;
    let max = 800;
    timer = setInterval(function () {
        let phi = n * theta;
        let r = c * Math.sqrt(n)
        let x = Math.cos(phi) * r;
        let y = Math.sin(phi) * r;

        let point = new Point(x, y, "red");
        points.push(point);

        if(n >= max) clearInterval(timer);

        n++;
    }, 1)
}

generatePoints();

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    for(let i = 0; i < points.length; i++){
        points[i].update(ctx);
    }
}

animate();