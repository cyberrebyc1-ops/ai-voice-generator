console.log('Hello');

async function generate(){

let text = document.getElementById("text").value;

let response = await fetch(
"https://api-inference.huggingface.co/models/YOUR_MODEL",
{
method:"POST",
headers:{
"Authorization":"Bearer YOUR_TOKEN",
"Content-Type":"application/json"
},
body:JSON.stringify({inputs:text})
}
);

let audioBlob = await response.blob();

let audioURL = URL.createObjectURL(audioBlob);

document.getElementById("audio").src = audioURL;

}
