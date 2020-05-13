let doubleZero = document.querySelector('.doubleZero');
let decimal = document.querySelector('.decimal');
let disPlayDetail = document.querySelector('.disPlayDetail');
let disPlayresult = document.querySelector('.disPlayresult');
let ac = document.querySelector('.ac');
let backspace = document.querySelector('.backspace');
let num_button = document.querySelectorAll('.num_button');
let operatorBtn = document.querySelectorAll('.operatorBtn');
let pendingVal;
let evalStrAry = [];
let evalStrAry_math = [];
let displayVal = '0';
let btnText;


num_button.forEach(num => num.addEventListener('click',updateNum))


function updateNum(e){
  console.log(e.target.innerText)
  if(displayVal == 0){
    displayVal= ''
  }
  displayVal+=e.target.innerText
  disPlayresult.innerText=toCurrency(displayVal)
}


operatorBtn.forEach(operator=>operator.addEventListener('click',calculateNum))

function calculateNum(e) {
  console.log(e)
  let operator = e.target.dataset.math; // 實際運算 
  let operator_Text = e.target.innerText; //顯示畫面 

  if(displayVal && operator !== '=') {
    pendingVal = displayVal;
    displayVal = '0';
    disPlayresult.innerText = toCurrency(displayVal);
    evalStrAry.push(pendingVal);
    evalStrAry.push(operator_Text);
    evalStrAry_math.push(pendingVal);
    evalStrAry_math.push(operator);

    let evaluation = evalStrAry.join(' ');
    let evaluation_list = evalStrAry.join(' ');
    disPlayDetail.innerText = toCurrency(evaluation_list);

  } else {
      evalStrAry_math.push(displayVal);
      evalStrAry.push(displayVal);

      let evaluation = evalStrAry.join(' ');
      let evaluation_list = evalStrAry.join(' ');

      let evaluation_math = eval(evalStrAry_math.join(' '));
      let evaluation_math_list = eval(evalStrAry_math).join(' ');

      disPlayresult.innerText = toCurrency(evaluation_math);
      disPlayDetail.innerText = toCurrency(evaluation_list);
      
      displayVal = '0';
      evalStrAry = [];
      evalStrAry_math = [];
  }
  
}

function toCurrency(num){
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}


ac.addEventListener('click', () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStrAry = [];
  evalStrAry_math = [];
  disPlayresult.innerText = displayVal;
  disPlayDetail.innerText = displayVal;
}, false);
