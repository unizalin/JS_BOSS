let gameTime = 60 
let timeCount = gameTime
let totalScore = 0
let gameMode = 'pause'
let level=0
let timmer
let gameLevel=[
  {
    minNum:1,
    maxNum :10,
    score:1,
  },
  {
    minNum :10,
    maxNum :99,
    score:2,
  },
  {
    minNum :100,
    maxNum :999,
    score:5,
  }
] 

let operation = ['+', '-', '÷', '×']

function getRandom(min,max){
  return Math.floor(Math.random()*max)+min;
};

function quiz(level) {
  let firstNum = document.querySelector('#num1')
  let secNum = document.querySelector('#num2')
  let operate = document.querySelector('#operator')
  let randomFirstNum = getRandom(gameLevel[level].minNum,gameLevel[level].maxNum)
  let randomSecNum = getRandom(gameLevel[level].minNum,gameLevel[level].maxNum)
  let randomOperation = operation[getRandom(0,3)]
  if(randomSecNum> randomFirstNum){
    let temp 
    temp = randomFirstNum
    randomSecNum =temp
  }
  firstNum.textContent=randomFirstNum
  secNum.textContent=randomSecNum
  operate.textContent=randomOperation
}

function checkAnswer(level) {
  let quizFirstNum = Number(document.querySelector('#num1').textContent)
  let quizSecNum = Number(document.querySelector('#num2').textContent)
  let quizOperate = document.querySelector('#operator').textContent
  let userAns =document.querySelector('#userAns').value
  console.log('userAns',userAns)
  let ans
  switch (quizOperate) {
    case '+':
      ans = quizFirstNum + quizSecNum
      break ;
    case '-':
      ans = quizFirstNum - quizSecNum
      break ;
    case '×':
      ans = quizFirstNum * quizSecNum
      break ;
    case '÷':
      ans = quizFirstNum / quizSecNum
      break ;
  }
  if(userAns==ans){
    totalScore=totalScore+gameLevel[level].score
  }
  if(userAns!=ans && totalScore>0){
    totalScore = totalScore - 1
  }
}

function showScore(params) {
  let scoreStr
  if(String(totalScore).length==1)scoreStr=`00${totalScore}`
  if(String(totalScore).length==2)scoreStr=`0${totalScore}`
  document.querySelector('.scoreNum').textContent=scoreStr

}

function start() {
  gameMode= 'play'
  timmer =setInterval(() => {
    timeCount-=1
    levelSet(timeCount)
    displayTime(timeCount)
    if(timeCount==0){
    }
  }, 1000);
}
function levelSet(time) {
  if(time<20){
    level=2
  }else if (time<40){
    level=1
  }
}
function displayTime(time) {
  let min = document.querySelector('.min')
  let sec = document.querySelector('.sec')
  if(time<60){
    min.textContent=`00`
    sec.textContent= time<10?`0${time}`:time
  }
  if(time==0){
    finish()
  }
}
function finish() {
  document.querySelector('.game').style.display="none"
  document.querySelector('.result').style.display="block"
  document.querySelector('.finScore').textContent=totalScore
  clearInterval(timmer)
  gameMode = 'pause'
  timeCount = gameTime
  level=0
  totalScore = 0
}


document.querySelector('body').addEventListener('keydown',(e)=>{
  if (e.which == 13 && gameMode=='play') {
    checkAnswer(level)
    showScore()
    quiz(level)
    document.querySelector('input').value = ''
  }
},true)

document.querySelector('.start').addEventListener('click',(e)=>{
  document.querySelector('.landing').style.display="none"
  document.querySelector('.game').style.display="block"
  start()
  quiz(level)
},true)

document.querySelector('.restart').addEventListener('click',()=>{
  document.querySelector('.result').style.display="none"
  document.querySelector('.landing').style.display="block"
  document.querySelector('.min').textContent='01'

},true)
console.log(gameMode)