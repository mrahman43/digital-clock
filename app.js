
function clock() {

var fullDate = new Date();

var hour = fullDate.getHours();
var min = fullDate.getMinutes();
var sec = fullDate.getSeconds();

if (hour<10) {
	min = '0' + hour;
}

if (min<10) {
	min = '0' +min;
}

if (sec<10) {
	sec = '0' + sec;
}
document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = ':'+min;
document.getElementById('sec').innerHTML = ':'+sec;

}

setInterval(clock,1000);