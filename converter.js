function celsconv() {
  document.convert.result.value=Math.round(((document.convert.temp.value) * 9/5 + 32) * 10) / 10;
}

function fahrconv() {
  document.convert.temp.value=Math.round(((((document.convert.result.value)- 32) * 5)/9) * 10) / 10;
}

if(document.layers) window.captureEvents(Event.KEYDOWN);
function enterKey() {
  if(event.keyCode==13) event.keyCode=9;
}

