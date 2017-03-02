//Karamaroudi
function clickvarMinesKaramaroudi(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKaramaroudi) {
			
			if(localStorage.varMinesKaramaroudi == 1){
				document.getElementById("varMinesKaramaroudi").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKaramaroudi == 0){
            document.getElementById("varMinesKaramaroudi").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKaramaroudi == 2){
            document.getElementById("varMinesKaramaroudi").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKaramaroudi == 3){
            document.getElementById("varMinesKaramaroudi").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKaramaroudi == 4){
            document.getElementById("varMinesKaramaroudi").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKaramaroudi == 5){
            document.getElementById("varMinesKaramaroudi").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKaramaroudi == 6){
            document.getElementById("varMinesKaramaroudi").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKaramaroudi == 7){
            document.getElementById("varMinesKaramaroudi").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKaramaroudi == 8){
            document.getElementById("varMinesKaramaroudi").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKaramaroudi").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKaramaroudi ;
        }
		
    } else {
        document.getElementById("varMinesKaramaroudi").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKaramaroudi_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKaramaroudi) {
            localStorage.varMinesKaramaroudi = Number(localStorage.varMinesKaramaroudi)+1;
			
        } else {
            localStorage.varMinesKaramaroudi = 1;
        }
      
    } else {
        document.getElementById("varMinesKaramaroudi").innerHTML = "ERROR";
    }
}
function clickvarMinesKaramaroudi_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKaramaroudi) {
            localStorage.varMinesKaramaroudi = Number(localStorage.varMinesKaramaroudi)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKaramaroudi = 1;
        }
      
    } else {
        document.getElementById("varMinesKaramaroudi").innerHTML = "ERROR";
    }
}
function clickvarMinesKaramaroudiReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKaramaroudi) {
            localStorage.varMinesKaramaroudi = Number(localStorage.varMinesKaramaroudi) - localStorage.varMinesKaramaroudi;
        } else {
            localStorage.varMinesKaramaroudi = 1;
        }
        document.getElementById("varMinesKaramaroudi").innerHTML = localStorage.varMinesKaramaroudi;
    } else {
        document.getElementById("varMinesKaramaroudi").innerHTML = "ERROR";
    }
}



//Karlis
function clickvarMinesKarlis(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarlis) {
			
			if(localStorage.varMinesKarlis == 1){
				document.getElementById("varMinesKarlis").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKarlis == 0){
            document.getElementById("varMinesKarlis").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKarlis == 2){
            document.getElementById("varMinesKarlis").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKarlis == 3){
            document.getElementById("varMinesKarlis").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKarlis == 4){
            document.getElementById("varMinesKarlis").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKarlis == 5){
            document.getElementById("varMinesKarlis").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKarlis == 6){
            document.getElementById("varMinesKarlis").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKarlis == 7){
            document.getElementById("varMinesKarlis").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKarlis == 8){
            document.getElementById("varMinesKarlis").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKarlis").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKarlis ;
        }
		
    } else {
        document.getElementById("varMinesKarlis").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKarlis_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarlis) {
            localStorage.varMinesKarlis = Number(localStorage.varMinesKarlis)+1;
			
        } else {
            localStorage.varMinesKarlis = 1;
        }
      
    } else {
        document.getElementById("varMinesKarlis").innerHTML = "ERROR";
    }
}
function clickvarMinesKarlis_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarlis) {
            localStorage.varMinesKarlis = Number(localStorage.varMinesKarlis)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKarlis = 1;
        }
      
    } else {
        document.getElementById("varMinesKarlis").innerHTML = "ERROR";
    }
}
function clickvarMinesKarlisReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarlis) {
            localStorage.varMinesKarlis = Number(localStorage.varMinesKarlis) - localStorage.varMinesKarlis;
        } else {
            localStorage.varMinesKarlis = 1;
        }
        document.getElementById("varMinesKarlis").innerHTML = localStorage.varMinesKarlis;
    } else {
        document.getElementById("varMinesKarlis").innerHTML = "ERROR";
    }
}



//Karnesi
function clickvarMinesKarnesi(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarnesi) {
			
			if(localStorage.varMinesKarnesi == 1){
				document.getElementById("varMinesKarnesi").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKarnesi == 0){
            document.getElementById("varMinesKarnesi").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKarnesi == 2){
            document.getElementById("varMinesKarnesi").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKarnesi == 3){
            document.getElementById("varMinesKarnesi").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKarnesi == 4){
            document.getElementById("varMinesKarnesi").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKarnesi == 5){
            document.getElementById("varMinesKarnesi").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKarnesi == 6){
            document.getElementById("varMinesKarnesi").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKarnesi == 7){
            document.getElementById("varMinesKarnesi").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKarnesi == 8){
            document.getElementById("varMinesKarnesi").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKarnesi").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKarnesi ;
        }
		
    } else {
        document.getElementById("varMinesKarnesi").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKarnesi_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarnesi) {
            localStorage.varMinesKarnesi = Number(localStorage.varMinesKarnesi)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesKarnesi = 1;
        }
      
    } else {
        document.getElementById("varMinesKarnesi").innerHTML = "ERROR";
    }
}
function clickvarMinesKarnesi_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarnesi) {
            localStorage.varMinesKarnesi = Number(localStorage.varMinesKarnesi)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKarnesi = 1;
        }
      
    } else {
        document.getElementById("varMinesKarnesi").innerHTML = "ERROR";
    }
}
function clickvarMinesKarnesiReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKarnesi) {
            localStorage.varMinesKarnesi = Number(localStorage.varMinesKarnesi) - localStorage.varMinesKarnesi;
        } else {
            localStorage.varMinesKarnesi = 1;
        }
        document.getElementById("varMinesKarnesi").innerHTML = localStorage.varMinesKarnesi;
    } else {
        document.getElementById("varMinesKarnesi").innerHTML = "ERROR";
    }
}



//Katsanaki
function clickvarMinesKatsanaki(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKatsanaki) {
			
			if(localStorage.varMinesKatsanaki == 1){
				document.getElementById("varMinesKatsanaki").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKatsanaki == 0){
            document.getElementById("varMinesKatsanaki").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKatsanaki == 2){
            document.getElementById("varMinesKatsanaki").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKatsanaki == 3){
            document.getElementById("varMinesKatsanaki").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKatsanaki == 4){
            document.getElementById("varMinesKatsanaki").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKatsanaki == 5){
            document.getElementById("varMinesKatsanaki").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKatsanaki == 6){
            document.getElementById("varMinesKatsanaki").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKatsanaki == 7){
            document.getElementById("varMinesKatsanaki").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKatsanaki == 8){
            document.getElementById("varMinesKatsanaki").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKatsanaki").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKatsanaki ;
        }
		
    } else {
        document.getElementById("varMinesKatsanaki").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKatsanaki_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKatsanaki) {
            localStorage.varMinesKatsanaki = Number(localStorage.varMinesKatsanaki)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesKatsanaki = 1;
        }
      
    } else {
        document.getElementById("varMinesKatsanaki").innerHTML = "ERROR";
    }
}
function clickvarMinesKatsanaki_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKatsanaki) {
            localStorage.varMinesKatsanaki = Number(localStorage.varMinesKatsanaki)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKatsanaki = 1;
        }
      
    } else {
        document.getElementById("varMinesKatsanaki").innerHTML = "ERROR";
    }
}
function clickvarMinesKatsanakiReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKatsanaki) {
            localStorage.varMinesKatsanaki = Number(localStorage.varMinesKatsanaki) - localStorage.varMinesKatsanaki;
        } else {
            localStorage.varMinesKatsanaki = 1;
        }
        document.getElementById("varMinesKatsanaki").innerHTML = localStorage.varMinesKatsanaki;
    } else {
        document.getElementById("varMinesKatsanaki").innerHTML = "ERROR";
    }
}



//Koufopoulos
function clickvarMinesKoufopoulos(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKoufopoulos) {
			
			if(localStorage.varMinesKoufopoulos == 1){
				document.getElementById("varMinesKoufopoulos").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKoufopoulos == 0){
            document.getElementById("varMinesKoufopoulos").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKoufopoulos == 2){
            document.getElementById("varMinesKoufopoulos").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKoufopoulos == 3){
            document.getElementById("varMinesKoufopoulos").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKoufopoulos == 4){
            document.getElementById("varMinesKoufopoulos").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKoufopoulos == 5){
            document.getElementById("varMinesKoufopoulos").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKoufopoulos == 6){
            document.getElementById("varMinesKoufopoulos").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKoufopoulos == 7){
            document.getElementById("varMinesKoufopoulos").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKoufopoulos == 8){
            document.getElementById("varMinesKoufopoulos").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKoufopoulos").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKoufopoulos ;
        }
		
    } else {
        document.getElementById("varMinesKoufopoulos").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKoufopoulos_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKoufopoulos) {
            localStorage.varMinesKoufopoulos = Number(localStorage.varMinesKoufopoulos)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesKoufopoulos = 1;
        }
      
    } else {
        document.getElementById("varMinesKoufopoulos").innerHTML = "ERROR";
    }
}
function clickvarMinesKoufopoulos_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKoufopoulos) {
            localStorage.varMinesKoufopoulos = Number(localStorage.varMinesKoufopoulos)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKoufopoulos = 1;
        }
      
    } else {
        document.getElementById("varMinesKoufopoulos").innerHTML = "ERROR";
    }
}
function clickvarMinesKoufopoulosReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKoufopoulos) {
            localStorage.varMinesKoufopoulos = Number(localStorage.varMinesKoufopoulos) - localStorage.varMinesKoufopoulos;
        } else {
            localStorage.varMinesKoufopoulos = 1;
        }
        document.getElementById("varMinesKoufopoulos").innerHTML = localStorage.varMinesKoufopoulos;
    } else {
        document.getElementById("varMinesKoufopoulos").innerHTML = "ERROR";
    }
}



//Kirimis
function clickvarMinesKirimis(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKirimis) {
			
			if(localStorage.varMinesKirimis == 1){
				document.getElementById("varMinesKirimis").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesKirimis == 0){
            document.getElementById("varMinesKirimis").innerHTML = "---";
        }
				
		else if (localStorage.varMinesKirimis == 2){
            document.getElementById("varMinesKirimis").innerHTML = "NOE";
        }
		else if (localStorage.varMinesKirimis == 3){
            document.getElementById("varMinesKirimis").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesKirimis == 4){
            document.getElementById("varMinesKirimis").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesKirimis == 5){
            document.getElementById("varMinesKirimis").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesKirimis == 6){
            document.getElementById("varMinesKirimis").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesKirimis == 7){
            document.getElementById("varMinesKirimis").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesKirimis == 8){
            document.getElementById("varMinesKirimis").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesKirimis").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesKirimis ;
        }
		
    } else {
        document.getElementById("varMinesKirimis").innerHTML = "ERROR";
    }
}
}
function clickvarMinesKirimis_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKirimis) {
            localStorage.varMinesKirimis = Number(localStorage.varMinesKirimis)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesKirimis = 1;
        }
      
    } else {
        document.getElementById("varMinesKirimis").innerHTML = "ERROR";
    }
}
function clickvarMinesKirimis_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKirimis) {
            localStorage.varMinesKirimis = Number(localStorage.varMinesKirimis)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesKirimis = 1;
        }
      
    } else {
        document.getElementById("varMinesKirimis").innerHTML = "ERROR";
    }
}
function clickvarMinesKirimisReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesKirimis) {
            localStorage.varMinesKirimis = Number(localStorage.varMinesKirimis) - localStorage.varMinesKirimis;
        } else {
            localStorage.varMinesKirimis = 1;
        }
        document.getElementById("varMinesKirimis").innerHTML = localStorage.varMinesKirimis;
    } else {
        document.getElementById("varMinesKirimis").innerHTML = "ERROR";
    }
}



//Liarou
function clickvarMinesLiarou(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiarou) {
			
			if(localStorage.varMinesLiarou == 1){
				document.getElementById("varMinesLiarou").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesLiarou == 0){
            document.getElementById("varMinesLiarou").innerHTML = "---";
        }
				
		else if (localStorage.varMinesLiarou == 2){
            document.getElementById("varMinesLiarou").innerHTML = "NOE";
        }
		else if (localStorage.varMinesLiarou == 3){
            document.getElementById("varMinesLiarou").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesLiarou == 4){
            document.getElementById("varMinesLiarou").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesLiarou == 5){
            document.getElementById("varMinesLiarou").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesLiarou == 6){
            document.getElementById("varMinesLiarou").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesLiarou == 7){
            document.getElementById("varMinesLiarou").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesLiarou == 8){
            document.getElementById("varMinesLiarou").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesLiarou").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesLiarou ;
        }
		
    } else {
        document.getElementById("varMinesLiarou").innerHTML = "ERROR";
    }
}
}
function clickvarMinesLiarou_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiarou) {
            localStorage.varMinesLiarou = Number(localStorage.varMinesLiarou)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesLiarou = 1;
        }
      
    } else {
        document.getElementById("varMinesLiarou").innerHTML = "ERROR";
    }
}
function clickvarMinesLiarou_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiarou) {
            localStorage.varMinesLiarou = Number(localStorage.varMinesLiarou)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesLiarou = 1;
        }
      
    } else {
        document.getElementById("varMinesLiarou").innerHTML = "ERROR";
    }
}
function clickvarMinesLiarouReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiarou) {
            localStorage.varMinesLiarou = Number(localStorage.varMinesLiarou) - localStorage.varMinesLiarou;
        } else {
            localStorage.varMinesLiarou = 1;
        }
        document.getElementById("varMinesLiarou").innerHTML = localStorage.varMinesLiarou;
    } else {
        document.getElementById("varMinesLiarou").innerHTML = "ERROR";
    }
}



//Liontou
function clickvarMinesLiontou(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiontou) {
			
			if(localStorage.varMinesLiontou == 1){
				document.getElementById("varMinesLiontou").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesLiontou == 0){
            document.getElementById("varMinesLiontou").innerHTML = "---";
        }
				
		else if (localStorage.varMinesLiontou == 2){
            document.getElementById("varMinesLiontou").innerHTML = "NOE";
        }
		else if (localStorage.varMinesLiontou == 3){
            document.getElementById("varMinesLiontou").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesLiontou == 4){
            document.getElementById("varMinesLiontou").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesLiontou == 5){
            document.getElementById("varMinesLiontou").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesLiontou == 6){
            document.getElementById("varMinesLiontou").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesLiontou == 7){
            document.getElementById("varMinesLiontou").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesLiontou == 8){
            document.getElementById("varMinesLiontou").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesLiontou").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesLiontou ;
        }
		
    } else {
        document.getElementById("varMinesLiontou").innerHTML = "ERROR";
    }
}
}
function clickvarMinesLiontou_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiontou) {
            localStorage.varMinesLiontou = Number(localStorage.varMinesLiontou)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesLiontou = 1;
        }
      
    } else {
        document.getElementById("varMinesLiontou").innerHTML = "ERROR";
    }
}
function clickvarMinesLiontou_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiontou) {
            localStorage.varMinesLiontou = Number(localStorage.varMinesLiontou)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesLiontou = 1;
        }
      
    } else {
        document.getElementById("varMinesLiontou").innerHTML = "ERROR";
    }
}
function clickvarMinesLiontouReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLiontou) {
            localStorage.varMinesLiontou = Number(localStorage.varMinesLiontou) - localStorage.varMinesLiontou;
        } else {
            localStorage.varMinesLiontou = 1;
        }
        document.getElementById("varMinesLiontou").innerHTML = localStorage.varMinesLiontou;
    } else {
        document.getElementById("varMinesLiontou").innerHTML = "ERROR";
    }
}



//Lountzi
function clickvarMinesLountzi(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLountzi) {
			
			if(localStorage.varMinesLountzi == 1){
				document.getElementById("varMinesLountzi").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesLountzi == 0){
            document.getElementById("varMinesLountzi").innerHTML = "---";
        }
				
		else if (localStorage.varMinesLountzi == 2){
            document.getElementById("varMinesLountzi").innerHTML = "NOE";
        }
		else if (localStorage.varMinesLountzi == 3){
            document.getElementById("varMinesLountzi").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesLountzi == 4){
            document.getElementById("varMinesLountzi").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesLountzi == 5){
            document.getElementById("varMinesLountzi").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesLountzi == 6){
            document.getElementById("varMinesLountzi").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesLountzi == 7){
            document.getElementById("varMinesLountzi").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesLountzi == 8){
            document.getElementById("varMinesLountzi").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesLountzi").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesLountzi ;
        }
		
    } else {
        document.getElementById("varMinesLountzi").innerHTML = "ERROR";
    }
}
}
function clickvarMinesLountzi_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLountzi) {
            localStorage.varMinesLountzi = Number(localStorage.varMinesLountzi)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesLountzi = 1;
        }
      
    } else {
        document.getElementById("varMinesLountzi").innerHTML = "ERROR";
    }
}
function clickvarMinesLountzi_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLountzi) {
            localStorage.varMinesLountzi = Number(localStorage.varMinesLountzi)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesLountzi = 1;
        }
      
    } else {
        document.getElementById("varMinesLountzi").innerHTML = "ERROR";
    }
}
function clickvarMinesLountziReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesLountzi) {
            localStorage.varMinesLountzi = Number(localStorage.varMinesLountzi) - localStorage.varMinesLountzi;
        } else {
            localStorage.varMinesLountzi = 1;
        }
        document.getElementById("varMinesLountzi").innerHTML = localStorage.varMinesLountzi;
    } else {
        document.getElementById("varMinesLountzi").innerHTML = "ERROR";
    }
}



//Makra
function clickvarMinesMakra(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMakra) {
			
			if(localStorage.varMinesMakra == 1){
				document.getElementById("varMinesMakra").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMakra == 0){
            document.getElementById("varMinesMakra").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMakra == 2){
            document.getElementById("varMinesMakra").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMakra == 3){
            document.getElementById("varMinesMakra").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMakra == 4){
            document.getElementById("varMinesMakra").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMakra == 5){
            document.getElementById("varMinesMakra").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMakra == 6){
            document.getElementById("varMinesMakra").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMakra == 7){
            document.getElementById("varMinesMakra").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMakra == 8){
            document.getElementById("varMinesMakra").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMakra").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMakra ;
        }
		
    } else {
        document.getElementById("varMinesMakra").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMakra_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMakra) {
            localStorage.varMinesMakra = Number(localStorage.varMinesMakra)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMakra = 1;
        }
      
    } else {
        document.getElementById("varMinesMakra").innerHTML = "ERROR";
    }
}
function clickvarMinesMakra_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMakra) {
            localStorage.varMinesMakra = Number(localStorage.varMinesMakra)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMakra = 1;
        }
      
    } else {
        document.getElementById("varMinesMakra").innerHTML = "ERROR";
    }
}
function clickvarMinesMakraReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMakra) {
            localStorage.varMinesMakra = Number(localStorage.varMinesMakra) - localStorage.varMinesMakra;
        } else {
            localStorage.varMinesMakra = 1;
        }
        document.getElementById("varMinesMakra").innerHTML = localStorage.varMinesMakra;
    } else {
        document.getElementById("varMinesMakra").innerHTML = "ERROR";
    }
}



//Mamali
function clickvarMinesMamali(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamali) {
			
			if(localStorage.varMinesMamali == 1){
				document.getElementById("varMinesMamali").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMamali == 0){
            document.getElementById("varMinesMamali").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMamali == 2){
            document.getElementById("varMinesMamali").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMamali == 3){
            document.getElementById("varMinesMamali").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMamali == 4){
            document.getElementById("varMinesMamali").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMamali == 5){
            document.getElementById("varMinesMamali").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMamali == 6){
            document.getElementById("varMinesMamali").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMamali == 7){
            document.getElementById("varMinesMamali").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMamali == 8){
            document.getElementById("varMinesMamali").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMamali").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMamali ;
        }
		
    } else {
        document.getElementById("varMinesMamali").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMamali_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamali) {
            localStorage.varMinesMamali = Number(localStorage.varMinesMamali)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMamali = 1;
        }
      
    } else {
        document.getElementById("varMinesMamali").innerHTML = "ERROR";
    }
}
function clickvarMinesMamali_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamali) {
            localStorage.varMinesMamali = Number(localStorage.varMinesMamali)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMamali = 1;
        }
      
    } else {
        document.getElementById("varMinesMamali").innerHTML = "ERROR";
    }
}
function clickvarMinesMamaliReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamali) {
            localStorage.varMinesMamali = Number(localStorage.varMinesMamali) - localStorage.varMinesMamali;
        } else {
            localStorage.varMinesMamali = 1;
        }
        document.getElementById("varMinesMamali").innerHTML = localStorage.varMinesMamali;
    } else {
        document.getElementById("varMinesMamali").innerHTML = "ERROR";
    }
}



//Mamantzi
function clickvarMinesMamantzi(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamantzi) {
			
			if(localStorage.varMinesMamantzi == 1){
				document.getElementById("varMinesMamantzi").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMamantzi == 0){
            document.getElementById("varMinesMamantzi").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMamantzi == 2){
            document.getElementById("varMinesMamantzi").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMamantzi == 3){
            document.getElementById("varMinesMamantzi").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMamantzi == 4){
            document.getElementById("varMinesMamantzi").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMamantzi == 5){
            document.getElementById("varMinesMamantzi").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMamantzi == 6){
            document.getElementById("varMinesMamantzi").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMamantzi == 7){
            document.getElementById("varMinesMamantzi").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMamantzi == 8){
            document.getElementById("varMinesMamantzi").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMamantzi").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMamantzi ;
        }
		
    } else {
        document.getElementById("varMinesMamantzi").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMamantzi_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamantzi) {
            localStorage.varMinesMamantzi = Number(localStorage.varMinesMamantzi)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMamantzi = 1;
        }
      
    } else {
        document.getElementById("varMinesMamantzi").innerHTML = "ERROR";
    }
}
function clickvarMinesMamantzi_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamantzi) {
            localStorage.varMinesMamantzi = Number(localStorage.varMinesMamantzi)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMamantzi = 1;
        }
      
    } else {
        document.getElementById("varMinesMamantzi").innerHTML = "ERROR";
    }
}
function clickvarMinesMamantziReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMamantzi) {
            localStorage.varMinesMamantzi = Number(localStorage.varMinesMamantzi) - localStorage.varMinesMamantzi;
        } else {
            localStorage.varMinesMamantzi = 1;
        }
        document.getElementById("varMinesMamantzi").innerHTML = localStorage.varMinesMamantzi;
    } else {
        document.getElementById("varMinesMamantzi").innerHTML = "ERROR";
    }
}



//Manolakos
function clickvarMinesManolakos(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesManolakos) {
			
			if(localStorage.varMinesManolakos == 1){
				document.getElementById("varMinesManolakos").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesManolakos == 0){
            document.getElementById("varMinesManolakos").innerHTML = "---";
        }
				
		else if (localStorage.varMinesManolakos == 2){
            document.getElementById("varMinesManolakos").innerHTML = "NOE";
        }
		else if (localStorage.varMinesManolakos == 3){
            document.getElementById("varMinesManolakos").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesManolakos == 4){
            document.getElementById("varMinesManolakos").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesManolakos == 5){
            document.getElementById("varMinesManolakos").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesManolakos == 6){
            document.getElementById("varMinesManolakos").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesManolakos == 7){
            document.getElementById("varMinesManolakos").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesManolakos == 8){
            document.getElementById("varMinesManolakos").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesManolakos").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesManolakos ;
        }
		
    } else {
        document.getElementById("varMinesManolakos").innerHTML = "ERROR";
    }
}
}
function clickvarMinesManolakos_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesManolakos) {
            localStorage.varMinesManolakos = Number(localStorage.varMinesManolakos)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesManolakos = 1;
        }
      
    } else {
        document.getElementById("varMinesManolakos").innerHTML = "ERROR";
    }
}
function clickvarMinesManolakos_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesManolakos) {
            localStorage.varMinesManolakos = Number(localStorage.varMinesManolakos)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesManolakos = 1;
        }
      
    } else {
        document.getElementById("varMinesManolakos").innerHTML = "ERROR";
    }
}
function clickvarMinesManolakosReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesManolakos) {
            localStorage.varMinesManolakos = Number(localStorage.varMinesManolakos) - localStorage.varMinesManolakos;
        } else {
            localStorage.varMinesManolakos = 1;
        }
        document.getElementById("varMinesManolakos").innerHTML = localStorage.varMinesManolakos;
    } else {
        document.getElementById("varMinesManolakos").innerHTML = "ERROR";
    }
}



//Matsa
function clickvarMinesMatsa(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMatsa) {
			
			if(localStorage.varMinesMatsa == 1){
				document.getElementById("varMinesMatsa").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMatsa == 0){
            document.getElementById("varMinesMatsa").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMatsa == 2){
            document.getElementById("varMinesMatsa").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMatsa == 3){
            document.getElementById("varMinesMatsa").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMatsa == 4){
            document.getElementById("varMinesMatsa").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMatsa == 5){
            document.getElementById("varMinesMatsa").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMatsa == 6){
            document.getElementById("varMinesMatsa").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMatsa == 7){
            document.getElementById("varMinesMatsa").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMatsa == 8){
            document.getElementById("varMinesMatsa").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMatsa").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMatsa ;
        }
		
    } else {
        document.getElementById("varMinesMatsa").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMatsa_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMatsa) {
            localStorage.varMinesMatsa = Number(localStorage.varMinesMatsa)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMatsa = 1;
        }
      
    } else {
        document.getElementById("varMinesMatsa").innerHTML = "ERROR";
    }
}
function clickvarMinesMatsa_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMatsa) {
            localStorage.varMinesMatsa = Number(localStorage.varMinesMatsa)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMatsa = 1;
        }
      
    } else {
        document.getElementById("varMinesMatsa").innerHTML = "ERROR";
    }
}
function clickvarMinesMatsaReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMatsa) {
            localStorage.varMinesMatsa = Number(localStorage.varMinesMatsa) - localStorage.varMinesMatsa;
        } else {
            localStorage.varMinesMatsa = 1;
        }
        document.getElementById("varMinesMatsa").innerHTML = localStorage.varMinesMatsa;
    } else {
        document.getElementById("varMinesMatsa").innerHTML = "ERROR";
    }
}



//Mpaltsavia
function clickvarMinesMpaltsavia(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpaltsavia) {
			
			if(localStorage.varMinesMpaltsavia == 1){
				document.getElementById("varMinesMpaltsavia").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMpaltsavia == 0){
            document.getElementById("varMinesMpaltsavia").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMpaltsavia == 2){
            document.getElementById("varMinesMpaltsavia").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMpaltsavia == 3){
            document.getElementById("varMinesMpaltsavia").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMpaltsavia == 4){
            document.getElementById("varMinesMpaltsavia").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMpaltsavia == 5){
            document.getElementById("varMinesMpaltsavia").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMpaltsavia == 6){
            document.getElementById("varMinesMpaltsavia").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMpaltsavia == 7){
            document.getElementById("varMinesMpaltsavia").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMpaltsavia == 8){
            document.getElementById("varMinesMpaltsavia").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMpaltsavia").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMpaltsavia ;
        }
		
    } else {
        document.getElementById("varMinesMpaltsavia").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMpaltsavia_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpaltsavia) {
            localStorage.varMinesMpaltsavia = Number(localStorage.varMinesMpaltsavia)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMpaltsavia = 1;
        }
      
    } else {
        document.getElementById("varMinesMpaltsavia").innerHTML = "ERROR";
    }
}
function clickvarMinesMpaltsavia_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpaltsavia) {
            localStorage.varMinesMpaltsavia = Number(localStorage.varMinesMpaltsavia)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMpaltsavia = 1;
        }
      
    } else {
        document.getElementById("varMinesMpaltsavia").innerHTML = "ERROR";
    }
}
function clickvarMinesMpaltsaviaReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpaltsavia) {
            localStorage.varMinesMpaltsavia = Number(localStorage.varMinesMpaltsavia) - localStorage.varMinesMpaltsavia;
        } else {
            localStorage.varMinesMpaltsavia = 1;
        }
        document.getElementById("varMinesMpaltsavia").innerHTML = localStorage.varMinesMpaltsavia;
    } else {
        document.getElementById("varMinesMpaltsavia").innerHTML = "ERROR";
    }
}



//Mparmpari
function clickvarMinesMparmpari(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMparmpari) {
			
			if(localStorage.varMinesMparmpari == 1){
				document.getElementById("varMinesMparmpari").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMparmpari == 0){
            document.getElementById("varMinesMparmpari").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMparmpari == 2){
            document.getElementById("varMinesMparmpari").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMparmpari == 3){
            document.getElementById("varMinesMparmpari").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMparmpari == 4){
            document.getElementById("varMinesMparmpari").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMparmpari == 5){
            document.getElementById("varMinesMparmpari").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMparmpari == 6){
            document.getElementById("varMinesMparmpari").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMparmpari == 7){
            document.getElementById("varMinesMparmpari").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMparmpari == 8){
            document.getElementById("varMinesMparmpari").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMparmpari").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMparmpari ;
        }
		
    } else {
        document.getElementById("varMinesMparmpari").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMparmpari_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMparmpari) {
            localStorage.varMinesMparmpari = Number(localStorage.varMinesMparmpari)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMparmpari = 1;
        }
      
    } else {
        document.getElementById("varMinesMparmpari").innerHTML = "ERROR";
    }
}
function clickvarMinesMparmpari_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMparmpari) {
            localStorage.varMinesMparmpari = Number(localStorage.varMinesMparmpari)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMparmpari = 1;
        }
      
    } else {
        document.getElementById("varMinesMparmpari").innerHTML = "ERROR";
    }
}
function clickvarMinesMparmpariReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMparmpari) {
            localStorage.varMinesMparmpari = Number(localStorage.varMinesMparmpari) - localStorage.varMinesMparmpari;
        } else {
            localStorage.varMinesMparmpari = 1;
        }
        document.getElementById("varMinesMparmpari").innerHTML = localStorage.varMinesMparmpari;
    } else {
        document.getElementById("varMinesMparmpari").innerHTML = "ERROR";
    }
}



//Mpelaouri
function clickvarMinesMpelaouri(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpelaouri) {
			
			if(localStorage.varMinesMpelaouri == 1){
				document.getElementById("varMinesMpelaouri").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMpelaouri == 0){
            document.getElementById("varMinesMpelaouri").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMpelaouri == 2){
            document.getElementById("varMinesMpelaouri").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMpelaouri == 3){
            document.getElementById("varMinesMpelaouri").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMpelaouri == 4){
            document.getElementById("varMinesMpelaouri").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMpelaouri == 5){
            document.getElementById("varMinesMpelaouri").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMpelaouri == 6){
            document.getElementById("varMinesMpelaouri").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMpelaouri == 7){
            document.getElementById("varMinesMpelaouri").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMpelaouri == 8){
            document.getElementById("varMinesMpelaouri").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMpelaouri").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMpelaouri ;
        }
		
    } else {
        document.getElementById("varMinesMpelaouri").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMpelaouri_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpelaouri) {
            localStorage.varMinesMpelaouri = Number(localStorage.varMinesMpelaouri)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMpelaouri = 1;
        }
      
    } else {
        document.getElementById("varMinesMpelaouri").innerHTML = "ERROR";
    }
}
function clickvarMinesMpelaouri_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpelaouri) {
            localStorage.varMinesMpelaouri = Number(localStorage.varMinesMpelaouri)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMpelaouri = 1;
        }
      
    } else {
        document.getElementById("varMinesMpelaouri").innerHTML = "ERROR";
    }
}
function clickvarMinesMpelaouriReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpelaouri) {
            localStorage.varMinesMpelaouri = Number(localStorage.varMinesMpelaouri) - localStorage.varMinesMpelaouri;
        } else {
            localStorage.varMinesMpelaouri = 1;
        }
        document.getElementById("varMinesMpelaouri").innerHTML = localStorage.varMinesMpelaouri;
    } else {
        document.getElementById("varMinesMpelaouri").innerHTML = "ERROR";
    }
}



//Mpoutsikaki
function clickvarMinesMpoutsikaki(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpoutsikaki) {
			
			if(localStorage.varMinesMpoutsikaki == 1){
				document.getElementById("varMinesMpoutsikaki").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMpoutsikaki == 0){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMpoutsikaki == 2){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMpoutsikaki == 3){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMpoutsikaki == 4){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMpoutsikaki == 5){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMpoutsikaki == 6){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMpoutsikaki == 7){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMpoutsikaki == 8){
            document.getElementById("varMinesMpoutsikaki").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMpoutsikaki").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMpoutsikaki ;
        }
		
    } else {
        document.getElementById("varMinesMpoutsikaki").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMpoutsikaki_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpoutsikaki) {
            localStorage.varMinesMpoutsikaki = Number(localStorage.varMinesMpoutsikaki)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMpoutsikaki = 1;
        }
      
    } else {
        document.getElementById("varMinesMpoutsikaki").innerHTML = "ERROR";
    }
}
function clickvarMinesMpoutsikaki_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpoutsikaki) {
            localStorage.varMinesMpoutsikaki = Number(localStorage.varMinesMpoutsikaki)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMpoutsikaki = 1;
        }
      
    } else {
        document.getElementById("varMinesMpoutsikaki").innerHTML = "ERROR";
    }
}
function clickvarMinesMpoutsikakiReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMpoutsikaki) {
            localStorage.varMinesMpoutsikaki = Number(localStorage.varMinesMpoutsikaki) - localStorage.varMinesMpoutsikaki;
        } else {
            localStorage.varMinesMpoutsikaki = 1;
        }
        document.getElementById("varMinesMpoutsikaki").innerHTML = localStorage.varMinesMpoutsikaki;
    } else {
        document.getElementById("varMinesMpoutsikaki").innerHTML = "ERROR";
    }
}



//Moisidou
function clickvarMinesMoisidou(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMoisidou) {
			
			if(localStorage.varMinesMoisidou == 1){
				document.getElementById("varMinesMoisidou").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesMoisidou == 0){
            document.getElementById("varMinesMoisidou").innerHTML = "---";
        }
				
		else if (localStorage.varMinesMoisidou == 2){
            document.getElementById("varMinesMoisidou").innerHTML = "NOE";
        }
		else if (localStorage.varMinesMoisidou == 3){
            document.getElementById("varMinesMoisidou").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesMoisidou == 4){
            document.getElementById("varMinesMoisidou").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesMoisidou == 5){
            document.getElementById("varMinesMoisidou").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesMoisidou == 6){
            document.getElementById("varMinesMoisidou").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesMoisidou == 7){
            document.getElementById("varMinesMoisidou").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesMoisidou == 8){
            document.getElementById("varMinesMoisidou").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesMoisidou").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesMoisidou ;
        }
		
    } else {
        document.getElementById("varMinesMoisidou").innerHTML = "ERROR";
    }
}
}
function clickvarMinesMoisidou_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMoisidou) {
            localStorage.varMinesMoisidou = Number(localStorage.varMinesMoisidou)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesMoisidou = 1;
        }
      
    } else {
        document.getElementById("varMinesMoisidou").innerHTML = "ERROR";
    }
}
function clickvarMinesMoisidou_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMoisidou) {
            localStorage.varMinesMoisidou = Number(localStorage.varMinesMoisidou)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesMoisidou = 1;
        }
      
    } else {
        document.getElementById("varMinesMoisidou").innerHTML = "ERROR";
    }
}
function clickvarMinesMoisidouReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesMoisidou) {
            localStorage.varMinesMoisidou = Number(localStorage.varMinesMoisidou) - localStorage.varMinesMoisidou;
        } else {
            localStorage.varMinesMoisidou = 1;
        }
        document.getElementById("varMinesMoisidou").innerHTML = localStorage.varMinesMoisidou;
    } else {
        document.getElementById("varMinesMoisidou").innerHTML = "ERROR";
    }
}



//Nitsas
function clickvarMinesNitsas(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNitsas) {
			
			if(localStorage.varMinesNitsas == 1){
				document.getElementById("varMinesNitsas").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesNitsas == 0){
            document.getElementById("varMinesNitsas").innerHTML = "---";
        }
				
		else if (localStorage.varMinesNitsas == 2){
            document.getElementById("varMinesNitsas").innerHTML = "NOE";
        }
		else if (localStorage.varMinesNitsas == 3){
            document.getElementById("varMinesNitsas").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesNitsas == 4){
            document.getElementById("varMinesNitsas").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesNitsas == 5){
            document.getElementById("varMinesNitsas").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesNitsas == 6){
            document.getElementById("varMinesNitsas").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesNitsas == 7){
            document.getElementById("varMinesNitsas").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesNitsas == 8){
            document.getElementById("varMinesNitsas").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesNitsas").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesNitsas ;
        }
		
    } else {
        document.getElementById("varMinesNitsas").innerHTML = "ERROR";
    }
}
}
function clickvarMinesNitsas_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNitsas) {
            localStorage.varMinesNitsas = Number(localStorage.varMinesNitsas)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesNitsas = 1;
        }
      
    } else {
        document.getElementById("varMinesNitsas").innerHTML = "ERROR";
    }
}
function clickvarMinesNitsas_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNitsas) {
            localStorage.varMinesNitsas = Number(localStorage.varMinesNitsas)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesNitsas = 1;
        }
      
    } else {
        document.getElementById("varMinesNitsas").innerHTML = "ERROR";
    }
}
function clickvarMinesNitsasReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNitsas) {
            localStorage.varMinesNitsas = Number(localStorage.varMinesNitsas) - localStorage.varMinesNitsas;
        } else {
            localStorage.varMinesNitsas = 1;
        }
        document.getElementById("varMinesNitsas").innerHTML = localStorage.varMinesNitsas;
    } else {
        document.getElementById("varMinesNitsas").innerHTML = "ERROR";
    }
}



//Nteves
function clickvarMinesNteves(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNteves) {
			
			if(localStorage.varMinesNteves == 1){
				document.getElementById("varMinesNteves").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesNteves == 0){
            document.getElementById("varMinesNteves").innerHTML = "---";
        }
				
		else if (localStorage.varMinesNteves == 2){
            document.getElementById("varMinesNteves").innerHTML = "NOE";
        }
		else if (localStorage.varMinesNteves == 3){
            document.getElementById("varMinesNteves").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesNteves == 4){
            document.getElementById("varMinesNteves").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesNteves == 5){
            document.getElementById("varMinesNteves").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesNteves == 6){
            document.getElementById("varMinesNteves").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesNteves == 7){
            document.getElementById("varMinesNteves").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesNteves == 8){
            document.getElementById("varMinesNteves").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesNteves").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesNteves ;
        }
		
    } else {
        document.getElementById("varMinesNteves").innerHTML = "ERROR";
    }
}
}
function clickvarMinesNteves_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNteves) {
            localStorage.varMinesNteves = Number(localStorage.varMinesNteves)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesNteves = 1;
        }
      
    } else {
        document.getElementById("varMinesNteves").innerHTML = "ERROR";
    }
}
function clickvarMinesNteves_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNteves) {
            localStorage.varMinesNteves = Number(localStorage.varMinesNteves)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesNteves = 1;
        }
      
    } else {
        document.getElementById("varMinesNteves").innerHTML = "ERROR";
    }
}
function clickvarMinesNtevesReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesNteves) {
            localStorage.varMinesNteves = Number(localStorage.varMinesNteves) - localStorage.varMinesNteves;
        } else {
            localStorage.varMinesNteves = 1;
        }
        document.getElementById("varMinesNteves").innerHTML = localStorage.varMinesNteves;
    } else {
        document.getElementById("varMinesNteves").innerHTML = "ERROR";
    }
}



//Xarisis
function clickvarMinesXarisis(){
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesXarisis) {
			
			if(localStorage.varMinesXarisis == 1){
				document.getElementById("varMinesXarisis").innerHTML = "OKT";  
        } 
		
		else if (localStorage.varMinesXarisis == 0){
            document.getElementById("varMinesXarisis").innerHTML = "---";
        }
				
		else if (localStorage.varMinesXarisis == 2){
            document.getElementById("varMinesXarisis").innerHTML = "NOE";
        }
		else if (localStorage.varMinesXarisis == 3){
            document.getElementById("varMinesXarisis").innerHTML = "DEK";
        }
		
		else if (localStorage.varMinesXarisis == 4){
            document.getElementById("varMinesXarisis").innerHTML = "IAN";
        }
		
		else if (localStorage.varMinesXarisis == 5){
            document.getElementById("varMinesXarisis").innerHTML = "FEV";
        }
		
		else if (localStorage.varMinesXarisis == 6){
            document.getElementById("varMinesXarisis").innerHTML = "MAR";
        }
		
		else if (localStorage.varMinesXarisis == 7){
            document.getElementById("varMinesXarisis").innerHTML = "APR";
        }
		
		else if (localStorage.varMinesXarisis == 8){
            document.getElementById("varMinesXarisis").innerHTML = "MAI";
        }
		
		else {
            document.getElementById("varMinesXarisis").innerHTML = "Den exeis settarei mina gia value : " + localStorage.varMinesXarisis ;
        }
		
    } else {
        document.getElementById("varMinesXarisis").innerHTML = "ERROR";
    }
}
}
function clickvarMinesXarisis_1() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesXarisis) {
            localStorage.varMinesXarisis = Number(localStorage.varMinesXarisis)+1;
			localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.varMinesXarisis = 1;
        }
      
    } else {
        document.getElementById("varMinesXarisis").innerHTML = "ERROR";
    }
}
function clickvarMinesXarisis_2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesXarisis) {
            localStorage.varMinesXarisis = Number(localStorage.varMinesXarisis)+2;
			localStorage.clickcount = Number(localStorage.clickcount)+2;
        } else {
            localStorage.varMinesXarisis = 1;
        }
      
    } else {
        document.getElementById("varMinesXarisis").innerHTML = "ERROR";
    }
}
function clickvarMinesXarisisReset() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.varMinesXarisis) {
            localStorage.varMinesXarisis = Number(localStorage.varMinesXarisis) - localStorage.varMinesXarisis;
        } else {
            localStorage.varMinesXarisis = 1;
        }
        document.getElementById("varMinesXarisis").innerHTML = localStorage.varMinesXarisis;
    } else {
        document.getElementById("varMinesXarisis").innerHTML = "ERROR";
    }
}



//