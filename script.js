let winstreak = 0;

function update(){
  if(winstreak<0){
    winstreak = 0;
  }
  document.getElementById("winstreak").innerText = winstreak.toString()+"連勝";
  lap = Math.floor(winstreak/7)+1
  num = winstreak%7+1
  document.getElementById("detail").innerText = lap.toString()+"周目"+num.toString()+"戦目";
}

function increase() {
  winstreak = winstreak+1;
  update();
}

function decrease() {
  winstreak = winstreak-1;
  update();
}

function reset() {
  winstreak = 0;
  update();
}

document.getElementById("increase").addEventListener("click", increase);
document.getElementById("decrease").addEventListener("click", decrease);
document.getElementById("reset").addEventListener("click", reset);
