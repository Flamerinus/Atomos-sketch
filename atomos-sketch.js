
var canvwidth = 480;
var canvheight = 480;
var proto1 = [];
var neutro1 = [];
var electro1 = [];
var muestras = [];
var atomo = {	
	x : canvwidth / 2,
	y : canvheight / 2,
	dibujar: function() {		
		var x = atomo.x;
		var y = atomo.y;
		this.angulorealproton = 0;
		this.angulorealneutron = 90;
		
		if(atomo.electrones <= 2) {
			for(i = 0; i < atomo.electrones; i++) {			
				atomo.angulorealelectron = atomo.angulorealelectron + atomo.anguloelectron;
				x = atomo.x;
				y = atomo.y;
				x = x + sin(atomo.angulorealelectron) * atomo.radiopequeelectron;
				y = y + cos(atomo.angulorealelectron) * atomo.radiopequeelectron;
				electro1.push(new Electron(x, y, 1));
						
			}
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
	angulorealelectron3 : 0, 
	radiopequeelectron : 100,
	radiograndeelectron : 150,
	radiograndeelectron3 : 200,
	
	act : function(numeroelem) {
			if(numeroelem === 1) {
				atomo.protones = 1;
				atomo.neutrones = 0;
				atomo.electrones = 1;
				atomo.anguloproton = 360;
				atomo.anguloelectron = 360;
				atomo.natomico = 1;
				atomo.peso = 1.008;
				atomo.name = "Hidrógeno";
				atomo.symbol = "H";
			} else if(numeroelem === 2) {
				atomo.protones = 2;
				atomo.electrones = 2;
				atomo.neutrones = 2;
				atomo.anguloproton = 360/2;
				atomo.anguloneutron = 360/2;
				atomo.anguloelectron = 360/2;
				atomo.natomico = 2;
				atomo.peso = 4.002;
				atomo.name = "Helio";
				atomo.symbol = "He";
			}  else if(numeroelem === 3) {
				atomo.protones = 3;
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
				atomo.protones = 4;
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
				atomo.protones = 5;
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
				atomo.protones = 6;
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
				atomo.protones = 7;
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
				atomo.protones = 8;
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
				atomo.protones = 9;
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
				atomo.protones = 10;
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
				atomo.protones = 11;
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
				atomo.protones = 12;
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
				atomo.protones = 13;
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
				atomo.protones = 14;
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
				atomo.protones = 15;
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
				atomo.protones = 17;
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
				atomo.protones = 18;
				atomo.neutrones = 22;
				atomo.electrones = 18;
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
				proto1 = [];
				neutro1 = [];
				electro1 = [];
				atomo.masa = atomo.protones + atomo.neutrones;
				atomo.dibujar();
		}
	};
	
function Proton(x, y) {
	this.x = x;
	this.y = y;
	this.fixx = x;
	this.fixy = y;
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.dibujar = function() {
		noStroke();
		//fill(255);
		fill(0, 0, 255, 200);
		//stroke(0, 0, 255);
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
		
		//text(this.x, 20, 20);
		//text(this.y, 20, 40);
		//text(this.speedx, 150, 20);
		//text(this.speedy, 150, 40);
	};
}
function Neutron(x, y) {
	this.x = x;
	this.y = y;
	this.fixx = x;
	this.fixy = y;
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.dibujar = function() {
		noStroke();
		//fill(255);
		fill(0, 200, 100, 200);
		//stroke(0, 255, 0);
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
		
		//text(this.x, 20, 20);
		//text(this.y, 20, 40);
		//text(this.speedx, 150, 20);
		//text(this.speedy, 150, 40);
	};
}

function Electron(x, y, c) {
	this.x = x;
	this.y = y;
	this.fixx = x;
	this.fixy = y;
	this.speedx = random(1, 3)/10;
	this.speedy = random(1, 3)/10;
	this.capa = c;
	this.radio;
	this.angulorot = atomo.angulorealelectron;	
	this.dibujar = function() {
		noStroke();
		//fill(255);
		fill(255, 255, 0, 200);
		//stroke(0, 255, 0);		
		ellipse(this.x, this.y, 10, 10);		
	};
	this.mover = function() {		
		if(this.capa === 1) {
			this.x = atomo.x;
			this.y = atomo.y;
			this.radio = atomo.radiopequeelectron;
			this.angulorot--;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
		} else if(this.capa === 2) {
			this.x = atomo.x;
			this.y = atomo.y;
			this.radio = atomo.radiograndeelectron;
			this.angulorot = this.angulorot + 1.5;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
		} else if(this.capa === 3) {
			this.x = atomo.x;
			this.y = atomo.y;
			this.radio = atomo.radiograndeelectron3;
			this.angulorot = this.angulorot - 2;
			this.x = this.x + sin(this.angulorot) * this.radio;
			this.y = this.y + cos(this.angulorot) * this.radio;
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

function drawparticles (){
		fill(222);
		stroke(0);
		ellipse(atomo.x, atomo.y, 100, 100); //nucelo
				
	 
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
	
	if(atomo.electrones > 10) {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
	    text(2, 73, 21);
		text(8, 73, 33);
		text(atomo.electrones - 10, 73, 46);
		noFill();
		stroke(0, 0, 0, 30);   
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron * 2, atomo.radiograndeelectron * 2); //capa2
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //capa1 
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron3 * 2, atomo.radiograndeelectron3 * 2); //capa3
	   } else if(atomo.electrones > 2 && atomo.electrones < 11) {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
		text(2, 73, 21);
		text(atomo.electrones - 2, 73, 33);
		noFill();
		stroke(0, 0, 0, 30);   
		ellipse(atomo.x, atomo.y, atomo.radiograndeelectron * 2, atomo.radiograndeelectron * 2); //capa2
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //capa1     
	   } else {
		textAlign(RIGHT);
		textSize(12);
		fill(0);
		text(atomo.electrones, 73, 21);
		noFill();
		stroke(0, 0, 0, 30);
		ellipse(atomo.x, atomo.y, atomo.radiopequeelectron * 2, atomo.radiopequeelectron * 2); //capa1  
	   }
	
}

function setup() {
	frameRate(60);
	var canvas = createCanvas(canvwidth, canvheight);
	canvas.parent("centro");
	muestras.push(new Neutron(10, 445));
	muestras.push(new Electron(10, 470, 0));
	muestras.push(new Proton(10, 420));
	angleMode(DEGREES);
	atomo.act();	
}
function draw() {
	background(169);	
	
	elembox();
	drawparticles();
	
	noStroke();
	fill(250);
	textAlign(LEFT);
	textSize(15);
	text("Neutrones: " + atomo.neutrones, 20, 450);
	text("Protones: " + atomo.protones, 20, 425);
	text("Electrones: " + atomo.electrones, 20, 475);	
}