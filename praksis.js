setInterval(function loadAnthroismaBal() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.bal) {
            localStorage.bal = Number(localStorage.varMinesKaramaroudi)+Number(localStorage.varMinesKarlis)+Number(localStorage.varMinesKarnesi)+Number(localStorage.varMinesKatsanaki)+Number(localStorage.varMinesKoufopoulos)+Number(localStorage.varMinesKirimis)+Number(localStorage.varMinesLiarou)+Number(localStorage.varMinesLiontou)+Number(localStorage.varMinesLountzi)+Number(localStorage.varMinesMakra)+Number(localStorage.varMinesMamali)+Number(localStorage.varMinesMamantzi)+Number(localStorage.varMinesManolakos)+Number(localStorage.varMinesMatsa)+Number(localStorage.varMinesMpaltsavia)+Number(localStorage.varMinesMparmpari)+Number(localStorage.varMinesMpelaouri)+Number(localStorage.varMinesMpoutsikaki)+Number(localStorage.varMinesMoisidou)+Number(localStorage.varMinesNitsas)+Number(localStorage.varMinesNteves)+Number(localStorage.varMinesXarisis);
			/*;
			*/
        } else {
            localStorage.bal = 1;
        }
        
    } else {
        document.getElementById("bal").innerHTML = "ERROR";
    }
}, 100);