import generatePoints from "./generatePoints.js";
import SlideShow from "./slideShow.js";

const options = document.getElementById("options");
const optionValues = options.getBoundingClientRect();

const canvas = document.getElementById('canvas');
if(window.innerWidth < 832){
    canvas.width = window.innerWidth;
} else if(window.innerWidth >= 832){
    canvas.width = window.innerWidth - optionValues.width;
}
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);

let points = [];

let timer = [];
let rateOfExpansion = 10;
let angle = 137.5;
let maxCircles = 750;

generatePoints(rateOfExpansion, angle, maxCircles, points, timer);

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    for(let i = 0; i < points.length; i++){
        points[i].update(ctx);
    }
}

animate();

window.addEventListener("resize", function(){
    location.reload();
});

const rateOfExpansionInput = document.getElementById("expansionRate");
rateOfExpansionInput.addEventListener("change", e => {
    rateOfExpansion = e.target.value;
})

const angleInput = document.getElementById("angleInput");
angleInput.addEventListener("change", e => {
    angle = e.target.value;
});

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", function(){
    generatePoints(rateOfExpansion, angle, maxCircles, points, timer);
    slideShow.stop();
    slideShowBtn.checked = false;
});

const maxCirclesInput = document.getElementById("maxCirclesInput");
maxCirclesInput.addEventListener("change", e => {
    maxCircles = e.target.value;
});

const slideShowBtn = document.getElementById("slideShow");
const slideShow = new SlideShow(generatePoints);
slideShowBtn.addEventListener("change", function(){
    if(this.checked){
        slideShow.start(maxCircles, angle, rateOfExpansion, points, timer);
    } else {
        slideShow.stop();
    }
})