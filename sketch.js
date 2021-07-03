const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time ;
var bg;

function preload() {

}

function setup() {
    var canvas = createCanvas(1550, 870);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    getBackgroundImg();

    if (backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);
    textSize(32);
    text("Time:"+time, 200, 200);

}
async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Calcutta");
    var resjson = await response.json();
    // console.log(resjson);
    var dt = resjson.datetime.slice(11, 13);
    time = resjson.datetime.slice(11, 19);


    if (dt >= 4 && dt <= 6) {
        bg = "sunrise.2png"
    }
    else if (dt >= 6 && dt <= 8) {
        bg = "sunrise3.png"
    }
    else if (dt >= 8 && dt <= 10) {
        bg = "sunrise4.png"
    }
    else if (dt >= 10 && dt <= 12) {
        bg = "sunrise5.png"
    }
    else if (dt >= 12 && dt <= 14) {
        bg = "sunrise6.png"
    }
    else if (dt >= 14 && dt <= 16) {
        bg = "sunrise7.png"
    }
    else if (dt >= 16 && dt <= 18) {
        bg = "sunset8.png"
    }
    else if (dt >= 16 && dt <= 18) {
        bg = "sunset9.png"
    }
    else if (dt >= 18 && dt <= 20) {
        bg = "sunset10.png"
    }
    else if (dt >= 20 && dt <= 22) {
        bg = "sunset11.png"
    }
    else if (dt >= 22 && dt == 0) {
        bg = "sunset12.png"
    }
    else {
        bg = "sunrise1.png"
    }
    backgroundImg = loadImage(bg);
}




