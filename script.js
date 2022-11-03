 const daysE1=document.getElementById("days");
const daysE1=document.getElementById("hours");
const daysE1=document.getElementById("mins");
const daysE1=document.getElementById("seconds");

const newyear="10 july 2022"
function countdown(){
    const newyeardate=new Date(new years);
    const currentdate=new Date();
    const totalseconds=(new date-currentdate)/1000;
    const days=math.floor(totalseconds/3600/24);
    const hours=math.floor(totalseconds/3600)%24;
    const mins=math.floor(totalseconds/60)%60;
    const seconds=math.floor(totalseconds)%60;
    daysE1.innerhtml=days;
    hours.innerhtml= formattime(hours);
    mins.innerhtml= formattime(mins);
    seconds.innerHTML= formatTime(seconds);
   
}
function formatTime(time){
    return time<10?('0${TIME}'):time;
}
countdown();
setInterval(countdown,1000);