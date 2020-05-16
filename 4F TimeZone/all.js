var timeZoneList = document.querySelectorAll('.timeZone')

var monthList = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
var nowTime = new Date()

function clock() {
  
  timeZoneList.forEach((item)=>{
    let localTimeZone = item.getAttribute('data-timeZone')
    let localName=localTimeZone.split('/')[1]
    // console.log(localName)
    let localTime = nowTime.toLocaleString('zh-TW',{timeZone:localTimeZone,hour12:false})
    console.log(localTime)
    let date = localTime.split(' ')[0]
    var dates = date.split('/')
    item.querySelector('.name').innerText = localName
    item.querySelector('.date').innerText=`${date[2]} ${monthList[dates[1]-1]}.${dates[2]}`
    item.querySelector('.time').innerText=localTime.split(' ')[1].slice(0,5)
  })
}

setInterval(() => {
  clock()
}, 1000);