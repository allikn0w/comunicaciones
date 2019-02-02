function back(){
  document.getElementById('terry').src = 'terry.jpg'; 
}

function biggers(){
  document.getElementById('terry').src = 'terry2.png'; 
}

function show(){
  var x = document.getElementById("interred");
  if (x.style.display == "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
