"use strict";
//Variable containing the spanish translations.
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
  n5:"Número atómico",
  n6:"Peso atómico",
  n7:"Número másico",
  n8:"Primera capa",
  n9:"Segunda capa",
  n10:"Tercera capa",
};
//Variable containing the english translations.
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
  n5:"Atomic number",
  n6:"Atomic weight",
  n7:"Mass number",
  n8:"First shell",
  n9:"Second shell",
  n10:"Third shell",
};

/*creates an array with all the HTML elements that have the "element" id.
It stores them with their properties so they can be adressed like this:
elarr[x].id */
var elarr = document.getElementsByClassName("element");
/*array used to store translations from the 2 functions.
Declared here so it can be used globally.*/
var q = [];
/*Array containing the key names of object "eng", y1 = [e1,e2,e3...]
Given that the object "esp" has the exact same keys, another array for those
values is not needed, this one can be used as a reference.
But it is imperative that the 2 objects are kept exactly the same when it comes
to key names and order, for this to work. */
var y1 = Object.keys(eng);
//Function that changes everything to english.
function goeng(){
  /*Sets the content of the "lowercontent" div to be the value of the
  "textoeng" variable.*/
  document.getElementById("lowercontent").innerHTML = textoeng;
//Explained in the goesp() function.
  for(var i = 0; i < y1.length; i++) {
    for(var j = 0; j < elarr.length; j++){
      if(elarr[j].id == y1[i]){
      document.getElementById(elarr[j].id).innerHTML = eng[y1[i]];
      }
    }
    for(var k = 0; k < y1.length; k++){
      if(y1[k] == y1[i]){
        q[k] = eng[y1[i]];
      }
    }
  }
}
function goesp(){
  /*Sets the content of the "lowercontent" div to be the value of the
  "textoesp" variable.*/
  document.getElementById("lowercontent").innerHTML = textoesp;
    /*This for() loop goes through the values of the y1[] array and compares
    them with the ids of the elements of elarr[].
    If the value of any item in the y1[] array coincides with the id of any
    element inside elarr[], the innerHTML of that element is set to be equal to
    a key's value inside the object "esp" that is called like the one that
    coincides: "esp[y1[i]]" --> esp["n1"] for i=0, esp["n2"] for i=1, etc.
    So the element with id="e1" will get the innerHTML value of esp.e1, given
    that it is the element at index 0 of elarr[] and the index 0 of y1[] has
    the value of "e1".
    An object's keys and values can be accessed with dots or square brackets.
    The advantage of square brackets [] is that you can place a string inside,
    or another variable. With the dot method, you can't do that.
    So esp.e1 is the same as esp["e1"]. But if you have a ="e1" you cant write
    esp.a, because this will look for a key named "a" inside the object esp.
    But you CAN write esp[a], which looks for a key named like the value of "a"
    which is "e1". This is inmensely useful.

    In the second for() loop, if any element of y1[] is equal to any element of
    y1[], which will always happen, then the q[] array value of that same index (k) will be set to contain the value of esp[y1[i]] meaning it will start
    containing the spanish translation  of that word.
    All is left to do now is to set the content of any text field to q[0], q[1],
    q[2]... etc.
    In the goeng() function we do the same thing but instead of setting values
    of q[] as the values of the esp object's keys, we set them as values
    of the eng object's keys.*/
    for(var i = 0; i < y1.length; i++) {
    for(var j = 0; j < elarr.length; j++){
      if(elarr[j].id == y1[i]){
      document.getElementById(elarr[j].id).innerHTML = esp[y1[i]];
      }
    }
    for(var k = 0; k < y1.length; k++){
      if(y1[k] == y1[i]){
        q[k] = esp[y1[i]];
      }
    }
  }
}

//English text
var textoeng = `
<h1>Átomos</h1>
<p><img src="imgs/665px-Helium_atom_QM.svg.png" alt="Helium_Wikipedia" style="float:right;width:300px;">
  The aim of this script is to aid with basic visual understanding of the atom, subatomic particles and their simplified representation.<br>
  (I wrote it to learn javascript & <a href="https://p5js.org/" target="_blank">p5.js</a>, here is the code on <a href="https://github.com/Flamerinus/Atomos-sketch" target="_blank">GitHub</a>.)<br>
  It's a simple program that shows a small part of the periodic table, with a visual representation of the atom, displayed in the basic <a href="https://en.wikipedia.org/wiki/Bohr_model" target="_blank"><strong>Bohr model</strong></a>.</br>
<ul>
<li>The general size of the atom is <strong>not</strong> to scale and neither the shape or the behavior of the subatomic particles are realistic.</li>
  <li>The nucleus of the atom is much smaller than it appears in our model.<br>
    If you look at the image on the right you can see it is around 50.000 times smaller than the electron cloud around it, in the helium atom and it does not have a case, shell or any type of boundry around it.</li>
<li>Protons and neutrons inside the nucleus are not really organized in shells of any type and behave much like the electron cloud around them, but  electrons do get organized in discrete energy shells in the cloud of electric charge they form around the nucleus, in real atoms.</li>
<li>The size and mass of the protons and neutrons is much greater than that of the electrons, even though they appear to be the same size in this model.</li>
<li>None of them are really shaped like "balls" or behave in this way, overlapping, dancing around, or spinning in different directions.</li>
<li>This visual representation is meant to indicate how many units of each particle are inside the nucleus and the outer shells, for each atom.</li>
</ul>All this is done for convenience and visual clarity, as this is not intended as an accurate model of real atoms.<br>
Image source: <a href="https://en.wikipedia.org/wiki/Atom" target="_blank">Wikipedia</a>.
</p>
<h3>FAQ</h3>
<p>
<dl>
<dt>Q: What is the <a href="https://en.wikipedia.org/wiki/Atomic_number" target="_blank">atomic number</a> of an atom?</dt>
<dd>A: The atomic number of an atom or Z (from the german word "Zahl", that means "number") is the number of protons of that atom and is unique to every element. It is the defining characteristic of every atom.<br>
If an atom has a Z number of 8 it is always oxygen and all oxygen atoms and variations always have 8 protons.</dd><hr>
<dt>Q: Why do some atoms have more neutrons than protons/electrons?</dt>
<dd>A: Because in the periodic table we display the most abundant variant of each element.<br>
 There are variations of the same element, that have a different number of neutrons and we call them <a href="https://en.wikipedia.org/wiki/Isotope" target="_blank">Isotopes</a>.<br>
 One element can have many isotopes and they all differ from each other by the number of neutrons each one has.<br>
 </dd><hr>
<dt>Q: What is the <a href="https://en.wikipedia.org/wiki/Mass_number" target="_blank">mass number</a> of an atom?</dt>
 <dd>A: The mass number A (from the german "Atomgewicht" that means "atomic weight", which this number is not) is the number of protons Z and neutrons N of that atom. A = Z + N. It is unique to every one of the isotopes of an element and thus different isotopes of the same atom have different mass numbers.</dd><hr>
<dt>Q: What is the <a href="https://en.wikipedia.org/wiki/Atomic_mass" target="_blank">atomic mass</a> of an atom?</dt>
<dd>A: The "atomic mass" of an atom has almost the same value as the mass number, being only slightly smaller.<br>
It is presented in "<a href="https://en.wikipedia.org/wiki/Unified_atomic_mass_unit" target="_blank">unified atomic mass units</a>" (u or Da) and it represents the mass of the atom, given mainly by the protons and neutrons, being that the electrons have an insignificantly low contribution to the atom's total mass. It is equally unique to each isotope.
</dd><hr>
<dt>Q: What is the <a href="https://en.wikipedia.org/wiki/Standard_atomic_weight" target="_blank">atomic weight</a> of an atom?</dt>
   <dd>A: The (standard) atomic weight or "relative atomic mass" is the average mass of the atoms of a certain type, depending on their abundance, in the Earth's crust and atmosphere.<br>
   Given that most elements have different isotopes aside from the most common, this number is almost never an integer. So if we have a sample of oxygen from the Earth's atmosphere we usually find more than 99% of it is Oxygen-16, the most common isotope, with 8 neutrons, but some isotopes with less neutrons are present thus giving us an average mass of less than 16 (15.999).</dd><hr>
<dt>Q: Why do you use "Aluminium" and not "Aluminum" ? What about "Sulfur" and "Sulphur" ?</dt>
<dd>A: Because the <a href="https://iupac.org/" target="_blank">IUPAC</a> says those are the prefered names for these elements.<br>
 If you have a problem with that you can fight me IRL. Come at me BRO!</dd><hr>
<dt>Q: Are there atoms of the same type that have a different number of electrons?</dt>
<dd>A: Yes and in that case, those atoms that are no longer eletrically neutral, are called <a href="https://en.wikipedia.org/wiki/Ion" target="_blank">Ions</a>.<br>
 So ions are like isotopes but instead of varying the number of neutrons, you vary the number of electrons a certain atom has, in order to create different ions.<br>
 The ones you create by removing electrons are called cations (+) and the ones you create by adding electrons are called anions (-).</dd>
</dl>
</p>
`;
//Spanish text
var textoesp = `
<h1>Átomos</h1>
<p><img src="imgs/665px-Helium_atom_QM.svg.png" alt="Helium_Wikipedia" style="float:right;width:300px;">
  El objetivo de este script es ayudar en la comprension visual del átomo, las particulas subatómicas y su representación simplificada.<br>
  (Lo escribí para aprender javascript & <a href="https://p5js.org/" target="_blank">p5.js</a>. Ver el código en <a href="https://github.com/Flamerinus/Atomos-sketch" target="_blank">GitHub</a>.)<br>
  Es un programa sencillo que muestra parte de la tabla periodica, con una representación visual del átomo, usando el clásico <a href="https://es.wikipedia.org/wiki/Modelo_at%C3%B3mico_de_Bohr" target="_blank"><strong>modelo atómico de Bohr</strong></a>.</br>
<ul>
<li>La escala y el tamaño del átomo <strong>no</strong> son realistas y tampoco lo es el comportamiento de las particulas subatómicas</li>
  <li>El tamañao del núcleo atómico es mucho menor que el de nuestro modelo, en átomos reales.<br>
    Si observas la imagen de la derecha, puedes ver que es alrededor de 50.000 veces más pequeño que la nube de electrones que lo rodea, en el átomo de helio y no tiene una capa, limite o barreras de ningún tipo alrededor.</li>
<li>Los protones y neutrones que están en el núcleo no se organizan en capas de ningún tipo y se comportan básicamente igual que la nube de electrones que les rodea, pero esos electrones sí que se organizan en capas muy diferenciadas dentro de la nube de carga eléctrica que forman alrededor del núcleo, en los átomos reales.</li>
<li>El tamaño y la masa de los protones y neutrones es mucho mayor que la de los electrones, aunque en este modelo parezca que son iguales.</li>
<li>Ninguna de las particulas tiene forma de "bola" o se comporta cómo una, rebotando, solapandose o girando en distintas direcciones.</li>
<li>Esta representación visual intenta indicar cuántas particulas de cada tipo hay en el núcleo y en las capas exteriores de cada átomo.</li>
</ul>Esto se hace por conveniencia y claridad visual, dado que no se esta intentando crear un modelo fiel de los átomos reales.<br>
Fuente de la imagen: <a href="https://es.wikipedia.org/wiki/%C3%81tomo" target="_blank">Wikipedia</a>.
</p>
<h3>FAQ</h3>
<p>
<dl>
<dt>Q: Qué es el <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_at%C3%B3mico" target="_blank">número atómico</a> de un átomo?</dt>
<dd>A: El número atómico de un átomo o Z (de la palabra alemana "Zahl" que significa "número") es el número de protones del átomo y es unico a cada elemento. Es la caracteristica que define cada átomo.<br>
Si un átomo tiene un número Z de 8 siempre será oxígeno y todos los átomos de oxígeno y sus variantes tendrán siempre 8 protones.</dd><hr>
<dt>Q: Por qué algunos átomos tienen más neutrones que protones/electrones?</dt>
<dd>A: Porque en la tabla periodica sale la variante más común de cada elemento.<br>
  Hay variantes del mismo elemento, que tienen diferentes números de neutrones y las llamamos <a href="https://es.wikipedia.org/wiki/Is%C3%B3topo" target="_blank">Isótopos</a>.<br>
 Un elemento puede tener varios isótopos y todos se diferencian por su número de neutrones.<br>
</dd><hr>
<dt>Q: Qué es el <a href="https://es.wikipedia.org/wiki/N%C3%BAmero_m%C3%A1sico" target="_blank">número másico</a> de un átomo?</dt>
 <dd>A: El número másico A (de la palabra alemana "Atomgewicht" qué significa "peso atómico", cosa que este numero no es) es el número de protones Z y neutrones N que tiene un átomo. A = Z + N. Es único a cada uno de los isótopos de un elemento, así que los distintos isótopos de un mismo elemento tienen distintos números másicos.</dd><hr>
<dt>Q: Qué es la <a href="https://es.wikipedia.org/wiki/Masa_at%C3%B3mica" target="_blank">masa atómica</a> de un átomo?</dt>
<dd>A: La masa atómica de un átomo tiene casi el mismo valor que el número másico, siendo un poco menor que este.<br>
Se da en "<a href="hhttps://es.wikipedia.org/wiki/Unidad_de_masa_at%C3%B3mica" target="_blank">unidades de masa átomica unificada</a>" (u o Da) y representa la masa del átomo, dada principalmente por los protones y los neutrones, ya que los electrones tienen una participación insignificantemente pequeña a la masa total del átomo. También es única a cada isótopo.
</dd><hr>
<dt>Q: Qué es el <a href="https://es.wikipedia.org/wiki/Peso_at%C3%B3mico" target="_blank">peso atómico</a> de un átomo?</dt>
   <dd>A: El peso atómico (estándard) o "masa atómica relativa" es la masa media de los átomos de un elemento, dependiendo de su abundancia, en la corteza y atmosfera terrestres.<br>
   Dado que la mayoría de los elementos tienen distintos isótopos aparte del común, este número casi nunca es entero.<br>
   Si tenemos una muestra de oxígeno de la atmosfera terrestre, normalmente contendrá más de un 99% de oxígeno-16, el isótopo común, con 8 neutrones, pero también habrá algúnos isótopos de oxígeno-15, por lo tanto la masa media de todo el conjunto será menor de 16 (15.999).</dd><hr>
<dt>Q: Perros o gatos?</dt>
<dd>A: Perros.<a href="https://raw.githubusercontent.com/Flamerinus/Atomos-sketch/master/imgs/mokkelius.jpg" target="_blank">Dog</a><br>
</dd><hr>
<dt>Q: Existen átomos del mismo elemento con un número diferente de electrones?</dt>
<dd>A: Sí y en ese caso, esos átomos que ya no son eléctricamente neutros, son llamados <a href="https://es.wikipedia.org/wiki/Ion" target="_blank">Iones</a>.<br>
 Los iones son cómo los isótopos pero en lugar de variar la cantidad de neutrones, en este caso variamos la cantidad de electrones que tiene un átomo, para crear distintos iones.<br>
Los iones creados quitando electrones de un átomo se llaman cationes (+) y los creados añadiendo electrones a un átomo se llaman aniones (-).</dd>
</dl>
</p>
`;
