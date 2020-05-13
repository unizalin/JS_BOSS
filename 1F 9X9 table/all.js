let numcal = "";
let ninemultipal = document.querySelector(".wrapper");
numcal += `<div class="card card-info">
    <div class="line-group top"><span>x</span>
      <div class="line"></div><span>x</span>
    </div>
    <div class="info">
      <h1>九九乘法表</h1>
      <h2>MULTIPLICATION CHART</h2>
    </div>
    <div class="line-group bottom"><span>x</span>
      <div class="line"></div><span>x</span>
    </div>
  </div>`;
for (let i = 2; i <= 9; i++) {
  numcal += '<div class="card card-nine">';
  numcal += `<div class="num-title"> ${i}</div>`;
  for (let j = 1; j <= 9; j++) {
    numcal += `<div class="num-calcu">${i}x${j}=${i * j} </div>`;
  }
  numcal += `</div>`;
}

ninemultipal.innerHTML = numcal;