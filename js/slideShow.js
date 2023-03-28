export default class SlideShow{
    constructor(callFunction) {
        this.callFunction = callFunction;
        this.timer;
    }

    start(max, angle, c, points, timer){
        let milliseconds = 5000;
        let callFunction = this.callFunction;
        this.timer = setInterval(function(){
            angle += 1;
            callFunction(c, angle, max, points, timer);
        }, milliseconds);
    }

    stop(){
        clearInterval(this.timer);
    }
}