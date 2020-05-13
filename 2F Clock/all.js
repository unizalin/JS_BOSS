let hourHand = document.querySelector('.hour-hand')
let minHand  = document.querySelector('.min-hand')
let secHand  = document.querySelector('.sec-hand')



function Clock(){
  let nowDate = new Date()
  let nowHour = nowDate.getHours()
  let nowMin = nowDate.getMinutes()
  let nowSec = nowDate.getSeconds()
  // console.log(nowHour,nowMin,nowSec)
  let hourDeg = (360/12)* nowHour
  let minDeg  = (369/60)* nowMin
  let secDeg  = (360/60)* nowSec

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(() => {
  Clock()
}, 1000);