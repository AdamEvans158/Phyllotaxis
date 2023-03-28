import Point from "./Point.js";

export default function generatePoints(c, theta, max, pointsArr, timer){
    clearInterval(timer[0]);
    pointsArr.length = 0;

    let n = 0;
    let hue = 0;
    timer[0] = setInterval(function(){ 
        hue += 340/max;
        let phi = n * theta;
        let r = c * Math.sqrt(n);
        let x = Math.cos(phi) * r;
        let y = Math.sin(phi) * r;
        
        pointsArr.push(new Point(x, y, `hsl(${hue}, 100%, 50%)`));

        if(n >= max) clearInterval(timer[0]);
        n++;
    }, 1);
}