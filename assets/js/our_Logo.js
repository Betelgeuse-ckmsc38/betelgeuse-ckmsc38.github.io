const parentId = 'sketch';
var LENGTH = document.getElementById('standard').offsetWidth;
const fontSize = 32;

var letsPlay = false;
var letsStart = true;
var times = 0;

function preload() {
    img = loadImage("images/stars.svg");
}

function setup() {
    cnv = createCanvas(LENGTH, LENGTH).parent(parentId); // 設置父節點 id
    cnv.doubleClicked(musicStart);
    frameRate(110); 
    audio = createAudio('../../song/合唱完整版.wav');
    stroke(color('white'));
    angleMode(DEGREES);
    imageMode(CENTER);
}

function draw() {
    if(letsStart){
    logo();
    letsStart = false;
    translate(-LENGTH / 2, -LENGTH / 2);
    }
    push();
    translate(LENGTH / 2, LENGTH / 2);
    if(letsPlay){ rotate( ++times)};
    image(img, 0, 0, 0.5 * LENGTH, 0.5 * LENGTH);
    pop();
}

function windowResized() {
    LENGTH = document.getElementById('standard').offsetWidth;
    resizeCanvas(LENGTH, LENGTH);
    background(color('black'));
    logo();
}

function logo() {
    translate(LENGTH / 2, LENGTH / 2);
    const LINE = 45;
    const BIGPOINT = 10;
    let prevangle = 0;
    let cluster = 0;
    background(color('#000'));
    //stars in background
    for(let i = 0; i < BIGPOINT; i += 1){
       strokeWeight(10);
       let centerAngle = random(360);
       let length = randomGaussian(LENGTH / 2 * 0.85, LENGTH / 2 * 0.05);
       for(let j = 0; j < cluster; j++){
            strokeWeight(randomGaussian(LENGTH / 70, LENGTH / 150));
           let newlength = length + randomGaussian(LENGTH / 20, LENGTH / 50);
           let BPangle = centerAngle + randomGaussian(3, 3);
           point(newlength * cos(BPangle), newlength * sin(BPangle));
       }
    } 
    //Radiate and stars around
    for(let i = 0; i < LINE; i++){
        strokeWeight(1.5);
        let angle = (i + randomGaussian(0, 0.15)) * 360 / LINE;
        let length = randomGaussian(LENGTH * 0.35 , LENGTH / 39);
        line(0, 0, length * cos(angle), length * sin(angle));
        let number = randomGaussian(1, 0.4);
        if(number > 0 && angle - prevangle >= 0.08){
            for(let j = 0; j < number; j++){
                strokeWeight(randomGaussian(LENGTH / 130, LENGTH / 780));
                let pointAngle = prevangle + randomGaussian((angle - prevangle) / 2, 0.01);
                let position = randomGaussian(LENGTH * 0.3 , LENGTH / 26);
                point( position * cos(pointAngle), position * sin(pointAngle));
            }
        }
        prevangle = angle;

    }
}

function musicStart() {
    if(letsPlay){
        audio.stop();
        letsPlay = false;
    }
    else {
        audio.loop();
        letsPlay = true;
        times = 0;
    }
}