let gameTime = 60 
let timeCount = gameTime
let totalScore = 0
let gameLevel=[
  {
    minNum:1,
    maxNum :10,
    score:1,
  },
  {
    minNum :1,
    maxNum :10,
    score:1,
  },
  {
    minNum :1,
    maxNum :10,
    score:1,
  }
] 

let operation = ['+', '-', '÷', '×']

function getRandom(min,max){
  return Math.floor(Math.random()*max)+min;
};

function quiz(params) {
  let firstNum = document.querySelector('#num1')
  let SecNum = document.querySelector('#num2')
  let operate = document.querySelector('#operator')
  let randomFirstNum = getRandom(gameLevel[0].minNum,gameLevel[0].maxNum)
  let randomSecNum = getRandom(gameLevel[0].minNum,gameLevel[0].maxNum)
  let randomOperation = getRandom(0,3)
  firstNum.textContent=randomFirstNum
  SecNum.textContent=randomSecNum
  operate.textContent=operation[randomOperation]
}

quiz()