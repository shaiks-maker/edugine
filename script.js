document.addEventListener("DOMContentLoaded", () => {

const enrollForm=document.getElementById("enrollment-form");
const chatForm=document.getElementById("chat-form");

if(enrollForm){

enrollForm.addEventListener("submit",()=>{

showLoading("Enrolling your team...");

});

}

if(chatForm){

chatForm.addEventListener("submit",()=>{

const q=document.getElementById("question").value.trim();

if(q.length<3){

alert("Please enter a valid question.");

event.preventDefault();

return;

}

showLoading("Gemini is thinking...");

});

}

});

function showLoading(message){

let loader=document.getElementById("loader");

if(!loader){

loader=document.createElement("div");

loader.id="loader";

loader.className="loading";

document.body.prepend(loader);

}

loader.style.display="block";

loader.innerHTML=message;

}

function hideLoading(){

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

}
