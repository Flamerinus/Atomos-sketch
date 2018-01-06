var esp = {
  e1:"Hidrógeno",
  e2:"Helio",
  e3:"Litio",
  e4:"Berilio",
  e5:"Boro",
  e6:"Carbono",
  e7:"Nitrógeno",
  e8:"Oxígeno",
  e9:"Flúor",
  e10:"Neón",
  e11:"Sodio",
  e12:"Magnesio",
  e13:"Aluminio",
  e14:"Silicio",
  e15:"Fósforo",
  e16:"Azufre",
  e17:"Cloro",
  e18:"Argón"
};

var eng = {
  e1:"Hydrogen",
  e2:"Helium",
  e3:"Lithium",
  e4:"Beryllium",
  e5:"Boron",
  e6:"Carbon",
  e7:"Nitrogen",
  e8:"Oxygen",
  e9:"Fluorine",
  e10:"Neon",
  e11:"Sodium",
  e12:"Magnesium",
  e13:"Aluminium",
  e14:"Silicon",
  e15:"Phosphorus",
  e16:"Sulfur",
  e17:"Chlorine",
  e18:"Argon"
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
}
