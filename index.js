// this is for digital clock
const currentTime = document.querySelector("h1"),

// know we are selecting our conatiner
container = document.querySelector(".container"),

//this is for seleting menu of  hour, minutes, units
selectMenu = document.querySelectorAll("select"),

// know we set alarm button
 selectAlarmBtn = document.querySelector("button");

 // we make a variable alarmtime
 var alarmTime, isAlarmSet=false,

 ringtone = new Audio("./ringtone/alarm.mp3");

//giving loops to hour min and units

for(let i=12;i>0;i--){
    i= i<10 ? "0"+i :i;
    let option =`<option value ="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);

}

for(let i=59;i>=0;i--){
    i= i<10 ? "0"+i :i;
    let option =`<option value ="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);

}

for(let i=2; i > 0; i--){
    let unit= i == 1 ? "AM" :"PM";
    let option =`<option value ="${unit}">${unit}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);

}

//know we are making digital clock
setInterval( () => {
    // we are makeing ->(h) hours,(m) minutes,(s) seconds
    let  date = new Date(),
    h= date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    units ="AM";

    if(h >= 12){
        h = h-12;
        units="PM";
    
    }
//if hour value is 0,set this vale to 12
h= h == 0? h= 12: h ;

// adding 0 before hr , min ,sec if the value less than 10

h= h< 10 ? "0" + h: h ;
m= m< 10 ? "0" + m: m ;
s= s< 10 ? "0" + s: s ;

currentTime.innerText=`${h}:${m}:${s} ${units}`;

if (alarmTime ==`${h}:${m}${units}`){
    console.log("alarm is ringing");
    ringtone.play();
    ringtone.loop=true;
}
},1000);

// know working on set alarm btn

function setAlarm(){

    if(isAlarmSet){                                       // if  isAlarmTime  value is true
        alarmTime="";                                     // clear the value of alarm time
        ringtone.pause();                                 // pause the ringtone
        container.classList.remove("disable"); 
        selectAlarmBtn.innerText= "set Alarm";
         return isAlarmSet = false;                         // return isAlarm value to false
        
    }
    var time =`${selectMenu[0].value}:${selectMenu[1].value}${selectMenu[2].value}`;
    console.log(time);
    if(time.includes("Hour")||time.includes("Minutes")||time.includes("AM/PM")){
        alert("Please, Select Vaild  Time To Set Alarm :)")

    }

    isAlarmSet=true;
    alarmTime=time;
    container.classList.add("disable");
    selectAlarmBtn.innerText= "clear Alarm";
}

selectAlarmBtn.addEventListener("click", setAlarm)