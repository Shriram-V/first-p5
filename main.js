function preload(){}

function setup(){
    canvas = createCanvas(650, 550);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 0, 0, 650, 550);
}

function takeSnapshot(){
    save('Picture.png');
}