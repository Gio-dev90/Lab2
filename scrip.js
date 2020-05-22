let spritesheet;
let spritedata;
let animation = [];
let num;
function preload()
{
    spritedata = loadJSON("number.json");
    spritesheet = loadImage("number.png");
}

function setup()
{
    createCanvas(740,900);
    let frames= spritedata.frames;
    for(let i=0; i<frames.length;i++)
    {
       
        let pos = frames[i].frame;
        let img= spritesheet.get(pos.x,pos.y,pos.w,pos.h);
        animation.push(img); 
        }
    
    num = new Sprite(animation,250,250,.05);
    console.log(spritedata);

}
function draw()
{
    background(0);
   num.animate();
   num.show();
}