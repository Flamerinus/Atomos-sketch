var esp = {
  e1:"Hidrógeno",
  e2:"Helio",
  e3:"Litio",
  e4:"Berilio"
};

var eng = {
  e1:"Hydrogen",
  e2:"Helium",
  e3:"Lithium",
  e4:"Beryllium",

};

function goeng(){
  var x = document.getElementsByClassName("element");
  var y = Object.keys(eng);
  var z = Object.values(eng);
  for(var i = 0; i < x.length; i++) {
    for(var j = 0; j < y.length; j++){
      if(x[i].id == y[j]){
      document.getElementById(x[i].id).innerHTML = z[j];
      }
    }

  }
  //alert("total " + z.length + " keys: " +z + y);
}

function goesp(){
  var x = document.getElementsByClassName("element");
  var y = Object.keys(esp);
  var z = Object.values(esp);
  for(var i = 0; i < x.length; i++) {
    for(var j = 0; j < y.length; j++){
      if(x[i].id == y[j]){
      document.getElementById(x[i].id).innerHTML = z[j];
      }
    }

  }
  //alert("total " + z.length + " keys: " +z + y);
}

function prueba(){



}
