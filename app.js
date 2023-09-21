let display = document.getElementById("display");

function removeLastCharacter() {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1);
  }
}

function result() {
  lastDigit = display.value.slice(-1);
  lastValue = display.value.slice(0,-1)
  if (display.value.length > 0) {
    if (lastDigit == "+"){
        display.value = lastValue*2;
      }
    else if (lastDigit == "*"){
        display.value = Math.pow(lastValue,2);
      }
    else if (lastDigit == "-"){
        display.value = lastValue-lastValue;
      } 
    display.value = eval(display.value);
  }
}
