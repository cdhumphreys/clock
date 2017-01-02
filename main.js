var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function timeCheck() {
  var dateObj = new Date();
  var hourAngle = ((dateObj.getHours() % 12)/12 * 360) - 90;
  var minuteAngle = ((dateObj.getMinutes() /60) * 360) - 90;
  var secondAngle = ((dateObj.getSeconds() /60) * 360) - 90;

  hourHand.style.transform = 'rotate(' + hourAngle + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteAngle + 'deg)';
  secondHand.style.transform = 'rotate(' + secondAngle + 'deg)';
}

setInterval(function () {
  timeCheck();
}, 250);
