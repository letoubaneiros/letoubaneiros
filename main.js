setInterval(function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.bal);
			
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}, 100);

function clickCounter_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}

function clickCounter_3() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+3;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}

function clickCounter_4() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+4;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}

function clickCounter_5() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+5;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}

function clickCounter_22() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+22;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}

setInterval(function clickLoader(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount);
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}, 100);