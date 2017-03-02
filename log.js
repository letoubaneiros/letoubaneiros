var h = {};
var m = {};
var s = {};

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    h.h = today.getHours();
    m.m = today.getMinutes();
    s.s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

function logAction() {
	startTime();
	alert(h.h);
	alert(m.m);
	alert(s.s);
    if(typeof(Storage) !== "undefined") {
        if (localStorage.logaction) {
            localStorage.logaction = "Karamaroudi +1";
			
        } else {
            localStorage.logaction = 1;
        }
        document.getElementById("action").innerHTML = localStorage.logaction + h.h;
    } else {
        document.getElementById("action").innerHTML = "ERROR";
    }
}

