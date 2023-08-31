img = "";
objects = [];
modelStatus = "";


function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(modelStatus != "")
    {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: objeto Detectado";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + "%", object[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, object[i].width, objects[i].heigth);
        }
    }

    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function modelLoaded() {
    console.log("Model Loaded!")
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}