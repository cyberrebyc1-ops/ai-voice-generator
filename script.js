async function generate(){

let text = document.getElementById("text").value;

let response = await fetch(
"https://api-inference.huggingface.co/models/microsoft/speecht5_tts",
{
method:"POST",
headers:{
"Authorization":"Bearer hf_hf_gfZwpASApAKMrUvwaunGUOLwsdoZleYwoH",
"Content-Type":"application/json"
},
body:JSON.stringify({inputs:text})
}
);

let audioBlob = await response.blob();

let audioURL = URL.createObjectURL(audioBlob);

document.getElementById("audio").src = audioURL;

}
