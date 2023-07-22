window.addEventListener('load',()=>{
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CW = canvas.width = 800;
const CH = canvas.height = 500;

const btn1 = document.getElementById("warpButton");

class Particle{
    constructor(effect,x,y,color){
        this.effect = effect;
       this.x = Math.random() * this.effect.width;
       this.y = Math.random() * this.effect.height;
       this.originX = Math.floor(x);
       this.originY = Math.floor(y);
       this.color = color;
       this.size = this.effect.gap;
       this.vx = 0;
       this.vy = 0;
       this.friction = 0.98;
       this.ease = 0.03;
       this.force = 0;
       this.angle = 0
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    update(){

        const dx = this.effect.mouse.x - this.x;
        const dy = this.effect.mouse.y - this.y;
        const distance = Math.hypot(dx,dy);
        if(distance < this.effect.mouse.radius){
            this.force = -this.effect.mouse.radius/distance;
            this.angle = Math.atan(dy,dx);
            this.vx += this.force*Math.cos(this.angle);
            this.vy += this.force*Math.sin(this.angle);
        }
        // else{
        //     this.vx = 0;
        //     this.vy = 0;
        // }

        this.x += (this.vx *= this.friction) + (this.originX - this.x)*this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y)*this.ease;

    }
    wrap(){
        this.x = Math.random() * this.effect.width;
        this.y = Math.random() * this.effect.height;
    }
}

class Effect{
    constructor(width,height,canvas){
        this.width = width;
        this.height = height;
        this.particles = [];
        this.image = document.getElementById('image1')
        this.gap = 4;
        this.canvasPos = canvas.getBoundingClientRect();
        this.canvasX = this.canvasPos.x;
        this.canvasy = this.canvasPos.y;
        this.mouse = {
            radius : 150,
            x : -11,
            y : -11
        }
        canvas.addEventListener("mousemove",(e)=>{
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
        })
        canvas.addEventListener("mouseleave",(e)=>{
            this.mouse.x = 0;
            this.mouse.y = 0;
        })
         
        canvas.addEventListener('touchmove', (event)=>{
            event.preventDefault();
            var touch = event.touches[0]; // Get the first touch point
            this.mouse.x = touch.clientX - this.canvasX;
            this.mouse.y = touch.clientY - this.canvasy;
            
          
          });
          
          
      
        canvas.addEventListener("touchend",(e)=>{
            this.mouse.x = 0;
            this.mouse.y = 0;
        })
    }
    init(ctx){
        ctx.drawImage(this.image,0,0)
        const pixels = ctx.getImageData(0,0,this.width,this.height);
        const pixelsData = pixels.data;
        for(let y=0; y<this.height; y+=this.gap){
           for(let x=0; x<this.width; x+=this.gap){
               const index = (y * this.width + x) * 4;
               const redVal = pixelsData[index];
               const greenVal = pixelsData[index+1];
               const blueVal = pixelsData[index+2];
               const alpha = pixelsData[index+3];
               const color = `rgb(${redVal},${greenVal},${blueVal})`;
               if(alpha > 0){
                this.particles.push(new Particle(this,x,y,color));
               }
           }
        }
    }
    draw(ctx){
        this.particles.forEach((particle)=>{
            particle.draw(ctx);
        })
    }
    update(){
        this.particles.forEach((particle)=>{
            particle.update();
        })
    }
    wrap(){
        this.particles.forEach((particle)=>{
            particle.wrap();
        })
    }
}

const effect = new Effect(CW,CH,canvas,ctx);
effect.init(ctx);

btn1.addEventListener("click",()=>{
    effect.wrap();
})

function animate(){
    ctx.clearRect(0,0,CW,CH);
    effect.draw(ctx);
    effect.update();
    requestAnimationFrame(animate);
}
animate();

})