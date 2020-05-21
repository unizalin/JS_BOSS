function draw(params) {
  console.log('sss')
  let cvs = document.getElementById('canvas')
    var ctx = cvs.getContext('2d')

    ctx.fillStyle="rgba(200,0,0,1)"
    ctx.fillRect (10, 10, 55, 50);
    // 畫出一個填滿的矩形

    ctx.clearRect(45,45,60,60);
    // 清除一個指定矩形區域的內容，使其變為全透明

    ctx.strokeRect(50,50,50,50);
    // 畫出一個矩形的邊框


    ctx.fillStyle="rgba(0,0,255,0.5)"
    ctx.fillRect(30,30,50,55)


    ctx.beginPath()
    ctx.moveTo(100,100)
    ctx.lineTo(100,150)
    ctx.lineTo(150,150)
    ctx.lineTo(100,100)
    ctx.stroke()
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(200,200,80,0,Math.PI*2,true)
    ctx.moveTo(240,220)
    ctx.arc(200,220,40,0,Math.PI,false);   // Mouth (clockwise)
    ctx.moveTo(240,190);
    ctx.arc(230,190,10,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(180,190);
    ctx.arc(170,190,10,0,Math.PI*2,true);  // Right eye
    ctx.stroke()
}
