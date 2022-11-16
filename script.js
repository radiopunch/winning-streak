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
  const elem = document.activeElement;
  elem.blur();
  update();
}

function decrease() {
  winstreak = winstreak-1;
  const elem = document.activeElement;
  elem.blur();
  update();
}

function reset() {
  winstreak = 0;
  const elem = document.activeElement;
  elem.blur();
  update();
}

function keypress_event(e) {
	if(e.code === 'ArrowRight'){
    increase();
	}
	if(e.key === 'ArrowLeft'){
    decrease();
	}
	if(e.code === 'Enter'){
    increase();
	}
	if(e.key === 'Backspace'){
    decrease();
	}
	if(e.key === 'Escape'){
    reset();
	}
	return false; 
}

function focused(){
  document.getElementById('comment').textContent = 'キーボード操作もできます';
  document.getElementById('comment').style.color = '#000000';
  document.getElementById('comment').style.fontWeight="normal";
}
function blurred(){
  document.getElementById('comment').textContent = 'キーボード操作をするにはウィンドウをアクティブにしてください';
  document.getElementById('comment').style.color = '#ff0000';
  document.getElementById('comment').style.fontWeight="bold";
}

document.getElementById("increase").addEventListener("click", increase);
document.getElementById("decrease").addEventListener("click", decrease);
document.getElementById("reset").addEventListener("click", reset);
document.addEventListener('keyup', keypress_event);

// ウィンドウをフォーカスしたら指定した関数を実行
window.addEventListener('focus', focused);

// ウィンドウからフォーカスが外れたら指定した関数を実行
window.addEventListener('blur', blurred);