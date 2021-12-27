prediction1="";
prediction1="";
Webcam.set({
height:300,
width:300,
image_format:"png",
png_quality:100,
dest_height:300,
dest_width:275
});
Webcam.attach("#camera");

function submit(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";
});}
console.log("ml5.version",ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vsXZ0J6hP/model.json",modelloaded);
function modelloaded(){
audio=new Audio("Welcome.ogg");
audio.play();
console.log(modelloaded);
}
function yo(){
synth=window.speechSynthesis;
synth1="First prediction is"+prediction1;
synth2="Second prediction is"+prediction2;
synth3= new SpeechSynthesisUtterance(synth1,synth2);
synth.speak(synth3);
}