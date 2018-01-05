//variables that will determine the width and height of the canvas object used by the p5.js library to draw. It is rendered in the setup() function, at the end of the document.
var canvwidth = 800;
var canvheight = 480;
//arrays that contain the proton, neutron and electron objects
var proto1 = [];
var neutro1 = [];
var electro1 = [];
var muestras = [];
//big container for every variable of the virtual atom drawn on the canvas
var atomo = {
//set the x and y coordinates of the atom to be half the value of the canvas width and height so it's drawn in the exact center
	x : canvwidth / 2,
	y : canvheight / 2,
//variables containing the number of protons, neutrons and electrons, as well as radii and angles, for clarity purposes only, the act() function sets the values for most of them from frame 1
	protones : 1,
	neutrones : 0,
	electrones : 1,
	symbol : "H",
	name : "Hidrógeno",
	natomico : 1,
	masa : 1,
	peso : 1.008,

	anguloproton : 0,
	anguloproton2 : 0,
	angulorealproton : 0,
	radiopequeproton : 15,
	radiograndeproton : 35,

	anguloneutron : 0,
	anguloneutron2 : 0,
	angulorealneutron : 0,
	radiopequeneutron : 22,
	radiograndeneutron : 42,

	anguloelectron : 0,
	anguloelectron2 : 0,
	anguloelectron3 : 0,
	angulorealelectron : 0,
	radiopequeelectron : 100,
	radiograndeelectron : 150,
	radiograndeelectron3 : 200,

	//function that creates the protons, neutrons and electrons, and sets the right angles.
	crear: function() {
		//offsets the initial neutron angle by 90º so that in the Helium and similar atoms they don't "overlap" and fill the nucleus in a more homogeneous way
		atomo.angulorealproton = 0;
		atomo.angulorealneutron = 90;
	//if the number of electrons set by the act() function is less or equal than 2 the for() loop  makes the electrons spread in a 360º arc uniformly using sin and cos functions starting at the atom's x and y, with the radius of the 1st shell being "radiopequeelectron" and the angle being "angulorealelectron" which gets increased every cycle of the for() loop by "anguloelectron" which is set by the act() function depending on the number of total electrons in that shell, then pushes a new Electron object in the electro1 array on the 1st shell every cycle until the number of elements reaches 2.
		if(atomo.electrones <= 2) {
			for(i = 0; i < atomo.electrones; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiopequeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiopequeelectron;
				//this array is declared in the act() function right before this function is called. It takes, x and y coordinates as well as the number of the shell the electron is to be created on.
				electro1.push(new Electron(x, y, 1));

			}
			//if the number of electrons set by the act() function is less or equal than 10, the first for loop does the same thing the one above did, but stops at 2 electrons, and the second for() loop takes the i variable from where the first one left it (2) and counts up to 10 pushing a new Electron object on the 2nd shell every cycle (meaning 8 max electrons on layer2) and changes the "angulorealelectron" adding "anguloelectron2" to it every cycle, starting from where the first for() loop left it (360º which is the same as 0º)."anguloelectron2" is set by the act function depending on the number of elements on the 2nd shell.
		} else if(atomo.electrones <= 10) {
			for(i = 0; i < 2; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiopequeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiopequeelectron;
				electro1.push(new Electron(x, y, 1));

			}
			for(i; i < atomo.electrones; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron2;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiograndeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiograndeelectron;
				electro1.push(new Electron(x, y, 2));

			}
			//This last else if () statement does exactly the same thing as the one before, only this time, with 3 for() loops, one that counts to 2, another one that stops at 10, and the last one that stops at 18.This is done because the 1st shell can only have 2 electrons, the 2nd shell maxes out at 8 and the 3rd shell reaches 8 with our last element: Argon(2+10+8).If the number of elements were to be increased some day, this 3rd shell could hold up to 18 electrons.
		} else if(atomo.electrones <= 18) {
			for(i = 0; i < 2; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiopequeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiopequeelectron;
				electro1.push(new Electron(x, y, 1));

			}
			for(i; i < 10; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron2;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiograndeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiograndeelectron;
				electro1.push(new Electron(x, y, 2));

			}
			for(i; i < atomo.electrones; i++) {
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron3;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiograndeelectron3;
				y = y + cos(atomo.angulorealelectron) * atomo.radiograndeelectron3;
				electro1.push(new Electron(x, y, 3));


			}
		}
		//The same thing is done with the protons, but instead of 3 shells, they are divided in two imaginary shells inside the nucleus. The 1st smaller one takes up to 8 protons and the rest go in a second bigger shell, around the small one.
		if(atomo.protones <= 8) {
			for(i = 0; i < atomo.protones; i++) {
				atomo.angulorealproton = atomo.angulorealproton + atomo.anguloproton;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealproton) * atomo.radiopequeproton;
				y = y + cos(atomo.angulorealproton) * atomo.radiopequeproton;
				proto1.push(new Proton(x, y));

			}
			} else {

			for(i = 0; i < 8; i++) {
				atomo.angulorealproton = atomo.angulorealproton + atomo.anguloproton;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealproton) * atomo.radiopequeproton;
				y = y + cos(atomo.angulorealproton) * atomo.radiopequeproton;
				proto1.push(new Proton(x, y));

			}

			for(i; i < atomo.protones; i++) {
				atomo.angulorealproton = atomo.angulorealproton + atomo.anguloproton2;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealproton) * atomo.radiograndeproton;
				y = y + cos(atomo.angulorealproton) * atomo.radiograndeproton;
				proto1.push(new Proton(x, y));
			}
		}
		//Same formula applied to neutrons, 2 imaginary shells inside the nucleus, for visual clarity.
		if(atomo.neutrones <= 8) {
			for(i = 0; i < atomo.neutrones; i++) {
				atomo.angulorealneutron = atomo.angulorealneutron + atomo.anguloneutron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealneutron) * atomo.radiopequeneutron;
				y = y + cos(atomo.angulorealneutron) * atomo.radiopequeneutron;
				neutro1.push(new Neutron(x, y));

			}
			} else {
			for(i = 0; i < 8; i++) {
				atomo.angulorealneutron = atomo.angulorealneutron + atomo.anguloneutron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealneutron) * atomo.radiopequeneutron;
				y = y + cos(atomo.angulorealneutron) * atomo.radiopequeneutron;
				neutro1.push(new Neutron(x, y));

			}

			for(i; i < atomo.neutrones; i++) {
				atomo.angulorealneutron = atomo.angulorealneutron + atomo.anguloneutron2;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealneutron) * atomo.radiograndeneutron;
				y = y + cos(atomo.angulorealneutron) * atomo.radiograndeneutron;
				neutro1.push(new Neutron(x, y));
			}
		}
	},
	//Function that is triggered in the 1st frame(in the setup() main function of the p5.js library, down below) and every time one of the buttons is pressed. It takes the argument "numeroelem" from each of the buttons, and uses it to determine the atom to display, from Hydrogen to Argon.
	act : function(numeroelem) {
			//this if() statement makes sure that if the selected element is Hydrogen, the one proton in the nucleus gets displayed in the center, and when there are 2 or more protons present, they get displayed at a distance from the center, in an imaginary shell with this radius: "radiopequeproton".
			if(numeroelem === 1){
			   atomo.radiopequeproton = 0;
			   } else {
				   atomo.radiopequeproton = 15;
			   }
		//this is the main part of the function, where it checks to see what button has been pressed and changes the variables to display the correct number of protons, neutrons and electrons, as well as the correct atomic weight, name, symbol and angles for the uniform spread of the protons and electrons in the crear() function, depending of the amount and the shell they are in.
			if(numeroelem === 1) {
				atomo.neutrones = 0;
				atomo.anguloproton = 360;
				atomo.anguloelectron = 360;
				atomo.anguloelectron2 = 360;
				atomo.natomico = 1;
				atomo.peso = 1.008;
				atomo.name = "Hidrógeno";
				atomo.symbol = "H";
			} else if(numeroelem === 2) {
				atomo.neutrones = 2;
				atomo.anguloproton = 360/2;
				atomo.anguloneutron = 360/2;
				atomo.anguloelectron = 360/2;
				atomo.natomico = 2;
				atomo.peso = 4.002;
				atomo.name = "Helio";
				atomo.symbol = "He";
			}  else if(numeroelem === 3) {
				atomo.neutrones = 4;
				atomo.electrones = 3;
				atomo.anguloproton = 360/3;
				atomo.anguloneutron = 360/4;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360;
				atomo.natomico = 3;
				atomo.peso = 6.94;
				atomo.name = "Litio";
				atomo.symbol = "Li";
			}  else if(numeroelem === 4) {
				atomo.neutrones = 5;
				atomo.electrones = 4;
				atomo.anguloneutron = 360/5;
				atomo.anguloproton = 360/4;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/2;
				atomo.natomico = 4;
				atomo.peso = 9.012;
				atomo.name = "Berilio";
				atomo.symbol = "Be";
			} else if(numeroelem === 5) {
				atomo.neutrones = 6;
				atomo.electrones = 5;
				atomo.anguloproton = 360/5;
				atomo.anguloneutron = 360/6;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/3;
				atomo.natomico = 5;
				atomo.peso = 10.81;
				atomo.name = "Boro";
				atomo.symbol = "B";
			}  else if(numeroelem === 6) {
				atomo.neutrones = 6;
				atomo.electrones = 6;
				atomo.anguloproton = 360/6;
				atomo.anguloneutron = 360/6;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/4;
				atomo.natomico = 6;
				atomo.peso = 12.011;
				atomo.name = "Carbono";
				atomo.symbol = "C";
			}  else if(numeroelem === 7) {
				atomo.neutrones = 7;
				atomo.electrones = 7;
				atomo.anguloproton = 360/7;
				atomo.anguloneutron = 360/7;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/5;
				atomo.natomico = 7;
				atomo.peso = 14.007;
				atomo.name = "Nitrógeno";
				atomo.symbol = "N";
			} else if(numeroelem === 8) {
				atomo.neutrones = 8;
				atomo.electrones = 8;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/6;
				atomo.natomico = 8;
				atomo.peso = 15.999;
				atomo.name = "Oxígeno";
				atomo.symbol = "O";
			}  else if(numeroelem === 9) {
				atomo.neutrones = 10;
				atomo.electrones = 9;
				atomo.anguloproton2 = 360/1;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/2;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/7;
				atomo.natomico = 9;
				atomo.peso = 18.998;
				atomo.name = "Flúor";
				atomo.symbol = "F";
			}  else if(numeroelem === 10) {
				atomo.neutrones = 10;
				atomo.electrones = 10;
				atomo.anguloproton2 = 360/2;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/2;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.natomico = 10;
				atomo.peso = 20.179;
				atomo.name = "Neón";
				atomo.symbol = "Ne";
			} else if(numeroelem === 11) {
				atomo.neutrones = 12;
				atomo.electrones = 11;
				atomo.anguloproton2 = 360/3;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/4;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360;
				atomo.natomico = 11;
				atomo.peso = 22.989;
				atomo.name = "Sodio";
				atomo.symbol = "Na";
			}  else if(numeroelem === 12) {
				atomo.neutrones = 12;
				atomo.electrones = 12;
				atomo.anguloproton2 = 360/4;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/4;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/2;
				atomo.natomico = 12;
				atomo.peso = 24.305;
				atomo.name = "Magnesio";
				atomo.symbol = "Mg";
			}  else if(numeroelem === 13) {
				atomo.neutrones = 14;
				atomo.electrones = 13;
				atomo.anguloproton2 = 360/5;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/6;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/3;
				atomo.natomico = 13;
				atomo.peso = 26.981;
				atomo.name = "Aluminio";
				atomo.symbol = "Al";
			} else if(numeroelem === 14) {
				atomo.neutrones = 14;
				atomo.electrones = 14;
				atomo.anguloproton2 = 360/6;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/6;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/4;
				atomo.natomico = 14;
				atomo.peso = 28.085;
				atomo.name = "Silicio";
				atomo.symbol = "Si";
			}  else if(numeroelem === 15) {
				atomo.neutrones = 16;
				atomo.electrones = 15;
				atomo.anguloproton2 = 360/7;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/8;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/5;
				atomo.natomico = 15;
				atomo.peso = 30.973;
				atomo.name = "Fósforo";
				atomo.symbol = "P";
			} else if(numeroelem === 16) {
				atomo.protones = 16;
				atomo.neutrones = 16;
				atomo.electrones = 16;
				atomo.anguloproton2 = 360/8;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/8;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/6;
				atomo.natomico = 16;
				atomo.peso = 32.06;
				atomo.name = "Azufre";
				atomo.symbol = "S";
			}  else if(numeroelem === 17) {
				atomo.neutrones = 18;
				atomo.electrones = 17;
				atomo.anguloproton2 = 360/9;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/10;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/7;
				atomo.natomico = 17;
				atomo.peso = 35.45;
				atomo.name = "Cloro";
				atomo.symbol = "Cl";
			}  else if(numeroelem === 18) {
				atomo.neutrones = 22;
				atomo.anguloproton2 = 360/10;
				atomo.anguloproton = 360/8;
				atomo.anguloneutron = 360/8;
				atomo.anguloneutron2 = 360/12;
				atomo.anguloelectron = 360/2;
				atomo.anguloelectron2 = 360/8;
				atomo.anguloelectron3 = 360/8;
				atomo.natomico = 18;
				atomo.peso = 39.948;
				atomo.name = "Argón";
				atomo.symbol = "Ar";
			}
		//Some of the above could have been done with less code, but given that each atom has it's own name, symbol and atomic weight, I couldn't think of (or tried too hard) a different and more efficient way of doing it.

				//This part of the code sets the number of protons and electrons to be the same as the element number, each time this function is triggered
				atomo.protones = atomo.electrones = numeroelem;

				//This part of the code empties the 3 arrays containing the protons, neutrons and electrons, which obviously get created in frame 1 because this function gets triggered by the setup function before anything else is created or drawn.
				proto1 = [];
				neutro1 = [];
				electro1 = [];
				//Now to calculate the atomic mass of each element we add the number of protons and the number of electrons, as this is displayed in the box, alongside the name, symbol, atomic weight, atomic number and electron configuration of each atom
				atomo.masa = atomo.protones + atomo.neutrones;
				//after setting every variable we trigger the crear() function which  creates the proton, neutron and electron objects at the different positions and angles, inside the nucleus, and in the electron shells and pushes them in their corresponding arrays. The objects are described below, and they have their own draw function as right now they are only objects inside an array, and have x and y coordinates, but no visual representation.
				atomo.crear();
		}
	};

//This is the creator function for the object "Electron", and it contains all the variables related to this object, and every instance of it that will be created by the crear() function. The same creator functions are used to generate the Neutron and Proton objects. It takes 3 arguments, x, y and c, this last one being the shell the electron has to be created on(1,2 or 3).
function Electron(x, y, c) {
	//This takes the input arguments the crear() function gives this instance of the Electron when it creates it, and stores them as local variables for this object, because they will be used to move this particular instance of the object around the nucleus in it's corresponding shell. The input arguments are only used to determine where it is created and drawn for the first frame, after that it has to be animated.
	this.x = x;
	this.y = y;
	//the x and y input arguments get stored for a second time for the bouncing part of the mover() function, which is used in the one electron displayed as an example in the lower left corner, alongside the number of electrons, protons and neutrons.
	this.fixx = x;
	this.fixy = y;
	//this is the speed of the bouncing explained below, in the mover() function
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.capa = c;
	this.radio;
	//this line takes the "angulorealelectron" variable from the atom exactly when this instance of the electron is created, and stores it as "angulorot" so that it can be used as a starting point for the animation. The variable is set by the crear() function using data from the act() function regarding the number of the element, and thus it's electrons.
	this.angulorot = atomo.angulorealelectron;
	//This function is used to actually draw on the p5 canvas using the p5.js library functions. It takes the electron's x and y coordinates and draws the ellipse at that point every frame, as this function is called in the draw() main function of the p5.js library, which is triggered every frame, through the drawparticles() function.(both setup() and draw() are down below, at the end of the document)
	this.dibujar = function() {
		noStroke();
		fill(255, 255, 0, 200);
		ellipse(this.x, this.y, 10, 10);
	};
	//This function inside each electron object, is used to move them around the nucleus at a certain speed and radius.
	this.mover = function() {
		//Here I check to see if the electron is in the first shell, and if it is, I reset it's x and y to be the center of the atom(given that it has been already drawn with the dibujar() function at a certain point on the 1st shell, point given by the crear() function) but this won't make it move to the center of the atom as the dibujar() function is not to be triggered again this frame.
		if(this.capa === 1) {
			this.x = atomo.x;
			this.y = atomo.y;
			//Here I set the radius of the electron's motion to "radiopequeelectron" given that it's in the 1st shell.
			this.radio = atomo.radiopequeelectron;
			//This line subtratcts 1 from the angle we got before, the moment this instance of the electron was created, so that it can be used to render it at a decresing angle every frame using the same principle and sin/cos functions we used in the crear() function to determine the position at which it's created. The only difference is that inside this mover() function, we are modifying the angle so that the electron is created at a different point every frame and thus making it spin around the nucleus at a certain distance: "radio", given that this mover() function is also called inside the draw() main function of p5.js, which is triggered every frame, through the drawparticles() function.
			this.angulorot--;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
			//Here we do the same as before, but given that the electron is now in the 2nd shell, we use a bigger radius: "radiograndeelectron".As you can see instead of using "angulorot--" to subtract 1 from the angle like before, or use "angulorot++" to add 1 to it every frame, we use "angulorot + 1.5" so it is not only spinning anticlockwise, it is also doing so at a greater speed, given that 1.5 > 1 :D
		} else if(this.capa === 2) {
			this.x = atomo.x;
			this.y = atomo.y;
			this.radio = atomo.radiograndeelectron;
			this.angulorot = this.angulorot + 1.5;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
			//Same story here, only this time we use an even bigger radius and an even greater speed for this 3rd shell.
		} else if(this.capa === 3) {
			this.x = atomo.x;
			this.y = atomo.y;
			this.radio = atomo.radiograndeelectron3;
			this.angulorot = this.angulorot - 2;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
			//This non-existent shell 0 is used solely for the purpose of having the one electron in the lower left corner bouncing around. As you can see it uses no sin/cos functions because it is not spinning, but bouncing inside a tiny bouncing box. The way the if() statement works is: it checks to see if the x coordinate of this instance of the electron: "this.x" is greater than another instance of the x we stored a second time a few lines of code ago, which we will use as an origin: "this.fixx" + 1 or if "this.x" is smaller than the same "this.fixx" - 1.If either is true, than it multiplies the speedx variable of this instance of the electron "this.speedx" by -1, which has the effect of making it negative if it's positive and making it positive if it's negative. Then after it does the same with the y coordinate it just adds the speedx to the x and the speedy to the y basically moving the electron's x and y coordinates inside a bouncing box which is 4x4, and whenever it's this.x is greater than the original x "this.fixx" +1 which means this.fixx +2, it makes it move in the opposite direction, until it gets to be smaller than this.fixx -1 which means this.fixx -2 and then it makes it go the other way again. The same happens with the y coordinate. The speedx and speedy can be changed, of course, and so can the +1 and -1 for the this.fixx and this.fixy, in order to make the bouncing box bigger or smaller. This is the exact procedure used to make the protons and neutrons bounce.
		} else if(this.capa === 0) {
			if (this.x > this.fixx + 1 || this.x < this.fixx - 1 ) {
			this.speedx = this.speedx * -1;
			}
			if (this.y >= this.fixy + 1 || this.y < this.fixy - 1) {
			this.speedy = this.speedy * -1;
			}
			this.x = this.x + this.speedx;
			this.y = this.y + this.speedy;
				  }


	}

	}
//creator function for the Proton object instances. Everything is the same as it was with the Electron creator function. The main difference is the color, and that these objects don't spin, they only bounce after being created, a simple function explained in the electron object
function Proton(x, y) {

	this.x = x;
	this.y = y;
	this.fixx = x;
	this.fixy = y;
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.dibujar = function() {
		noStroke();
		fill(0, 0, 255, 200);
		ellipse(this.x, this.y, 10, 10);

	};
	this.mover = function() {
		if (this.x > this.fixx + 1 || this.x < this.fixx - 1 ) {
		this.speedx = this.speedx * -1;
	}
		if (this.y >= this.fixy + 1 || this.y < this.fixy - 1) {
		this.speedy = this.speedy * -1;
	}
		this.x = this.x + this.speedx;
		this.y = this.y + this.speedy;

	};
}
//Same here, color difference.
function Neutron(x, y) {
	this.x = x;
	this.y = y;
	this.fixx = x;
	this.fixy = y;
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.dibujar = function() {
		noStroke();
		fill(0, 200, 100, 200);
		ellipse(this.x, this.y, 10, 10);
	};
	this.mover = function() {
		if (this.x > this.fixx + 1 || this.x < this.fixx - 1 ) {
		this.speedx = this.speedx * -1;
	}
		if (this.y >= this.fixy + 1 || this.y < this.fixy - 1) {
		this.speedy = this.speedy * -1;
	}
		this.x = this.x + this.speedx;
		this.y = this.y + this.speedy;

	};
}

//This function is used to draw the nucleus and every other part of the atom.
function drawparticles (){
		fill(222);
		stroke(0);
		ellipse(atomo.x, atomo.y, 100, 100); //nucelo

	 	//These for loops trigger the draw function of every particle stored in it's corresponding array. Given that this is called inside the draw() main function of p5.js below, it is triggered every frame, so everything is drawn every frame, thus allowing for the coordinates of each element to change and be seen as animated.
		for(var i = 0; i < electro1.length; i++) {
			electro1[i].dibujar();
			electro1[i].mover();
			}

		for(var i = 0; i < proto1.length; i++) {
			proto1[i].dibujar();
			proto1[i].mover();
			}

		for(var i = 0; i < neutro1.length; i++) {
			neutro1[i].dibujar();
			neutro1[i].mover();
			}
		for(var i = 0; i < muestras.length; i++) {
			muestras[i].dibujar();
			muestras[i].mover();
			}

}
//This draws the little box where the characteristics of the atom being displayed are shown. It uses p5.js functions to draw on the p5 canvas. The fill and stroke functions are kind of self-explanatory, you use them before you draw text or shapes, so that the fill and stroke colors get used on them. If you do not reset them or change them, they will stay the same for everything you draw afterwards. There is documentation about all of the functions in the p5.js library.

function elembox() {
	fill(0);
	rect(9, 9, 67, 93);
	fill(123, 231, 132, 222);
	stroke(111);
	rect(10, 10, 64, 90);

	noStroke();
	fill(0);
	textSize(35);
	textAlign(CENTER);
	text(atomo.symbol, 42.5, 60);

	noStroke();
	textSize(12);
	text(atomo.name, 42, 80);

	textSize(12);
	fill(255, 0, 0, 200);
	textAlign(LEFT);
	text(atomo.peso, 11, 99);
	fill(0, 0, 255);
	text(atomo.natomico, 12, 21);

	fill(0);
	textAlign(RIGHT);
	text(atomo.masa, 73, 99);
	//This code is for the upper right corner of the box, where the electron configuration is displayed. If the number is greater than 10 then it displays the first shell's 2 electrons and the second shell's 8 electrons always, and then it takes the number of electrons the element has, subtracts the 10 already being displayed and shows it below. So Magnesium shows 2,8,2 = 2,8 and 12-10.
	if(atomo.electrones > 10) {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
	    text(2, 73, 21);
		text(8, 73, 33);
		text(atomo.electrones - 10, 73, 46);
		noFill();
		stroke(0, 0, 0, 30);
		//this part draws the grey guide lines for the shells, and in this case as the atom has more then 10 electrons, it has to draw the 3 of them at their corresponding radii, which of course can be changed by modifying the corresponding radius variable.
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron * 2, atomo.radiograndeelectron * 2); //2nd shell
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //1st shell
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron3 * 2, atomo.radiograndeelectron3 * 2); //3rd shell
		//If the number of electrons is between 3 and 10 it shows the 1st shell's 2 electrons always and then it takes the number of electrons of the element , subtracts the 2 already being displayed and shows it below. So Oxygen shows 2,6 = 2 and 8-2.
	   } else if(atomo.electrones > 2 && atomo.electrones < 11) {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
		text(2, 73, 21);
		text(atomo.electrones - 2, 73, 33);
		noFill();
		stroke(0, 0, 0, 30);
		//Here only the 2 inner shells are drawn given that the atom has between 3 and 10 electrons.
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron * 2, atomo.radiograndeelectron * 2); //2nd shell
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //1st shell
		 //this part is for when the number of electrons is neither greater than 10 nor between 2 and 10, meaning 1 and 2 electrons. In this case it just displays them.
	   } else {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
		text(atomo.electrones, 73, 21);
		noFill();
		stroke(0, 0, 0, 30);
		//Here only the inner shell is drawn as the atom has 1 or 2 electrons.
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //1st shell
	   }

}
//This is one of the 2 main functions of p5.js. It gets triggered at the beginning before anything else, and only once.
function setup() {
	//this sets the frame rate at which the next function draw() will be rendered.
	frameRate(60);
	//This creates the p5.js canvas on which everything will be drawn, using the variables we declared at the beginning.
	var canvas = createCanvas(canvwidth, canvheight);
	//This sets the HTML element inside of which the canvas will sit.
	canvas.parent("centro");
	//Here we push 1 element of each type in the "muestras[]" array so that they are displayed at the bottom, and we do it here inside setup() because their origin will not be modified by any part of the code.
	muestras.push(new Neutron(10, 445));
	muestras.push(new Electron(10, 470, 0));
	muestras.push(new Proton(10, 420));
	//This sets the angle mode for the p5.js draw() function. Default is RADIANS, check documentation for more info.
	angleMode(DEGREES);
	//This just triggers the act() function in the same way pressing the Hydrogen button would. This is done so that the canvas displays something before any button gets clicked, and it doesn't appear empty.
	atomo.act(1);
}
//This is the second main function of p5.js.It gets rendered every frame. Inside you have to place everything you need to be drawn on the canvas every frame, not only once. Any animation, or text that can change goes in here, or is called by a function that goes in here.
function draw() {
	//This first line draws the background every frame, basically erasing everything else and after that everything gets redrawn again, every frame. The order in which you place things inside this function is very important, you don't want to have the background be drawn last, covering everything else :D
	background(169);

	elembox();
	drawparticles();
	//This draws the text in the lower left corner.
	noStroke();
	fill(250);
	textAlign(LEFT);
	textSize(15);
	text("Neutrones: " + atomo.neutrones, 20, 450);
	text("Protones: " + atomo.protones, 20, 425);
	text("Electrones: " + atomo.electrones, 20, 475);
}
