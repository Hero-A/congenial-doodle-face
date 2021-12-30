noseX = 0;
noseY = 0;

rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
   video = createCapture(VIDEO);
   video.size(550, 500);
   video.position(0, 100);

   canvas = createCanvas(550, 500);
   canvas.position(700, 96);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
    background("whitesmoke");

    document.getElementById("square_side").innerHTML = "Width and Height of the square is: " + difference + "px";
    fill('#f0b71d');
    stroke('#1decf0');
    strokeWeight(7);
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet activated unautherised perimeters breached');
} 


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y; 
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}   