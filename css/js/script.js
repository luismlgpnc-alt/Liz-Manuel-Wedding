const content =
document.getElementById("weddingContent");

const openBtn =
document.getElementById("openBtn");

openBtn.addEventListener("click", ()=>{

document.querySelector(".envelope-screen")
.style.display = "none";

content.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const weddingDate =
new Date("2027-03-20T18:00:00");

function countdown(){

const now = new Date();

const diff =
weddingDate - now;

const days =
Math.floor(diff / (1000*60*60*24));

const hours =
Math.floor(
(diff%(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(diff%(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(diff%(1000*60))
/
1000
);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}

setInterval(countdown,1000);

countdown();

const giftBtn =
document.getElementById("giftBtn");

giftBtn.addEventListener("click",()=>{

const info =
document.getElementById("giftInfo");

if(
info.style.display === "block"
){

info.style.display = "none";

}
else{

info.style.display = "block";

}

});
