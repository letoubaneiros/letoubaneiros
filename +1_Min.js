function clickMines(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.minescount) {
			
			if(localStorage.minescount == 1){
				document.getElementById("mines").innerHTML = "OKT";  
        } 
		
		else if (localStorage.minescount == 0){
            document.getElementById("mines").innerHTML = "---";
        }
				
		else if (localStorage.minescount == 2){
            document.getElementById("mines").innerHTML = "NOE";
        }
		else if (localStorage.minescount == 3){
            document.getElementById("mines").innerHTML = "DEK";
        }
		
		else if (localStorage.minescount == 4){
            document.getElementById("mines").innerHTML = "IAN";
        }
		
		else if (localStorage.minescount == 5){
            document.getElementById("mines").innerHTML = "FEV";
        }
		
		else if (localStorage.minescount == 6){
            document.getElementById("mines").innerHTML = "MAR";
        }
		
		else if (localStorage.minescount == 7){
            document.getElementById("mines").innerHTML = "APR";
        }
		
		else if (localStorage.minescount == 8){
            document.getElementById("mines").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("mines").innerHTML = "Den exeis settarei mina gia value : " + localStorage.minescount ;
        }
		
    } else {
        document.getElementById("mines").innerHTML = "ERROR";
    }
}
}


function clickMines_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.minescount) {
            localStorage.minescount = Number(localStorage.minescount)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.minescount = 1;
        }
      
    } else {
        document.getElementById("mines").innerHTML = "ERROR";
    }
}

function clickMines_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.minescount) {
            localStorage.minescount = Number(localStorage.minescount)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.minescount = 1;
        }
      
    } else {
        document.getElementById("mines").innerHTML = "ERROR";
    }
}


function clickMinesReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.minescount) {
            localStorage.minescount = Number(localStorage.minescount) - localStorage.minescount;
        } else {
            localStorage.minescount = 1;
        }
        document.getElementById("mines").innerHTML = localStorage.minescount;
    } else {
        document.getElementById("mines").innerHTML = "ERROR";
    }
}