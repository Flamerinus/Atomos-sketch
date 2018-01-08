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
  e18:"Argón",
  n1:"Protones",
  n2:"Neutrones",
  n3:"Electrones",
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
  e18:"Argon",
  n1:"Protons",
  n2:"Neutrons",
  n3:"Electrons",
};
//Variables used to change the language of the rest of the elements, aside from the buttons.
var names = {
  e1:"",
  e2:"",
  e3:"",
  e4:"",
  e5:"",
  e6:"",
  e7:"",
  e8:"",
  e9:"",
  e10:"",
  e11:"",
  e12:"",
  e13:"",
  e14:"",
  e15:"",
  e16:"",
  e17:"",
  e18:"",
  n1:"Protons",
  n2:"Neutrons",
  n3:"Electrons",
  n5:"",
  n6:"",
  n7:"",
  n8:"",
  n9:"",
  n10:"",
  n11:"",
  n11:"",
  n12:"",
};

var elarr = document.getElementsByClassName("element");
var q = Object.values(names);
var w = Object.keys(names);
var y1 = Object.keys(eng);
var z1 = Object.values(eng);
var y2 = Object.keys(esp);
var z2 = Object.values(esp);

function goeng(){
  for(var i = 0; i < y1.length; i++) {
    for(var j = 0; j < elarr.length; j++){
      if(elarr[j].id == y1[i]){
      document.getElementById(elarr[j].id).innerHTML = z1[i];
      }
    }
    for(var k = 0; k < w.length; k++){
      if(w[k] == y1[i]){
        q[k] = z1[i];
      }
    }
  }
}
function goesp(){
    for(var i = 0; i < y2.length; i++) {
    for(var j = 0; j < elarr.length; j++){
      if(elarr[j].id == y2[i]){
      document.getElementById(elarr[j].id).innerHTML = z2[i];
      }
    }
    for(var k = 0; k < w.length; k++){
      if(w[k] == y2[i]){
        q[k] = z2[i];
      }
    }
  }
}
