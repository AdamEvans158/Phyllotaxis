export default class Point{
    constructor(x,y,color) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.color = color;
        this.alpha = 0;
    }

    draw(ctx){
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r, Math.PI * 2, 0, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
    
    update(ctx){
        if(this.alpha < 1){
            this.alpha += 0.01;
        }
        this.draw(ctx);
    }
}