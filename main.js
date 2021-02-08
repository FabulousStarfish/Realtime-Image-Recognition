function setup(){
    canvas=createCanvas(350,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iLzpReg4a/model.json',modelLoaded);
}
function modelLoaded(){
    console.log("Model Loaded !");
}
function draw(){
    image(video,0,0,350,300);
    classifier.classify(video,checkImage);
}
function checkImage(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}