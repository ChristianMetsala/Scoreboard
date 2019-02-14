// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var playerNumValue = document.getElementById("playerNum").value;
  var firstnameValue = document.getElementById("firstname").value;
  var lastnameValue = document.getElementById("lastname").value;
  var scoreValue = document.getElementById("score").value;
  var t1 = document.createTextNode(playerNumValue + "   ");
  var t2 = document.createTextNode(firstnameValue + "   ");
  var t3 = document.createTextNode(lastnameValue + "   ");
  var t4 = document.createTextNode(scoreValue + "   ");
  li.appendChild(t1);
  li.appendChild(t2);
  li.appendChild(t3);
  li.appendChild(t4);
  if (playerNumValue === '' || firstnameValue === '' || lastnameValue === '' || scoreValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("playerNum").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("score").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}