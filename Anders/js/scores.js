var event = document.getElementById("add");
var remove = document.getElementById("delete");
/* ==============================================
   Asiakastietojen tallentaminen JavaScript-taulukkoon ja nayttainen 
   Bootstrap-avusteisesti taulukkona www-sivulla  */

function Player(playernumber, firstname, lastname, score){
	this.playernumber = playernumber;
	this.firstname = firstname;
	this.lastname = lastname;
	this.score = score;
}

function showPlayersOnScreen(players) {
  // hae taulukko, mihin rivejä lisätään
  var table = document.getElementById('player-rows');

  // käydään läpi players
  for (var i = 0; i < players.length; ++i) {
    // pointteri yksittäiseen asiakas objectiin
    var player = players[i];

    // luo rivi elementti mihin liitetään solut
    var row = document.createElement('tr');

    // arrayn propertyt
    var properties = ['playernumber', 'firstname', 'lastname', 'score'];

    // liitetään jokainen property riviin, järjestyksessä
    for (var j = 0; j < properties.length; ++j) {
      // create new data cell for names
      var cell = document.createElement('td');

      // aseta propertyn nimi käyttäen hakasulku notaatiota (properties[j] on string,
      // mitä voidaan käyttää että päästään käsiksi pelaajan propertyihin)
      cell.innerHTML = player[properties[j]];

      // lisätään rivin loppuun
      row.appendChild(cell);
    }

    // lisätään rivi talukoon
    table.appendChild(row);
  }
}

function newPlayer(event, players) {

        var newPl;
		
        var playerNumber = document.getElementById('add-player');
		var firstName = document.getElementById('add-firstname');
        var lastName = document.getElementById('add-lastname');
		var scoRe = document.getElementById('add-score');
     
        newPl = new Player(playerNumber.value, firstName.value, lastName.value, scoRe.value);
		
        players.push(newPl);
		
		// show player on screen
		if( playerNumber.value !== "") {
			var table = document.getElementById('player-rows');
			var row = document.createElement('tr');
			var properties = ['playernumber', 'firstname', 'lastname', 'score'];

			for (var j = 0; j < properties.length; ++j) {
				var cell = document.createElement('td');
				cell.innerHTML = newPl[properties[j]];
				row.appendChild(cell);
			}
			table.appendChild(row);
		}
      
		
		// tyhjennetaan syötekentat sivulta
		playerNumber.value = firstName.value = lastName.value = scoRe.value = "";
}
function sortElements() {
   players.sort(function(a, b){return a.score - b.score});
   showPlayersOnScreen(players);
}



	
function init () {

  var players = new Array();
  
  /* testausta varten viedaan taulukkoon alkuarvoksi kolme asiakasta   */
  players[players.length] = new Player(100, "Jaska", "Miettinen", 12);
  players[players.length] = new Player(101, "Pirkko", "Puustinen", 12);
  players[players.length] = new Player(102, "Liisa", "Leino", 13);
  showPlayersOnScreen(players);

  /*  uuden asiakkaan syottaminen taulukkoon sivun lomakekenttien avulla  */
  document.getElementById("add").addEventListener("click", function () { 
                              newPlayer(event, players)
                            });
  
}

init();

