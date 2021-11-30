//https://teachablemachine.withgoogle.com/models/5r8xYnRVk/model.json

var prediction_1 = ""
var prediction_2 = ""

camera=document.getElementById("camera1")

Webcam.set({
    width:350,
    height:300,
    img_format:"png",
    png_quality:90
});

Webcam.attach("#camera")

function camera1(e){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='cheese' src='"+data_uri+"'>"
    })
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_k4vrHDR0/model.json",modelLoaded)
function modelLoaded(e){
    console.log("modelLoaded")
}