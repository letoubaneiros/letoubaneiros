function clickReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) - localStorage.clickcount;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Balance:" + localStorage.clickcount + " evro";
    } else {
        document.getElementById("result").innerHTML = "ERROR";
    }
}