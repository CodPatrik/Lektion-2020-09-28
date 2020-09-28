

// Objekt

// Person 
// Ålder  let age = 52;
// längd  let length = 189;
// skostorlek  let shoeSize=48;
// Hårfärg  let hairColor = silver;
// antal fingrar  let numberOfFingers= 11;

/*
Om man inte använder objekt tänket måste man ha en massa variabler
som man sedan ska hålla reda på.
tex.

let carColor = "red";
let carMake = "Volvo";

function carDrive(){
  console.log("driving");
}


Allt detta beskriver en o samma sak och visst vore det bra att
samla dessa under ett och samma namn.
Det är då man börjar prata om objekt.


Här är ett sätt att skapa ett objekt.

let car = {
    make:"Volvo",
    color:"Red",
    
    drive:function(){
      console.log("Driving");
    }

  }
 
Och så skapar man ett till objekt.

  let truck = {
    make:"Volvo",
    color:"Green",
    
    drive:function(){
      console.log("Driving");
    }

  }

Båda påminner väldigt mycket om varandra 
så här blir det att skriva samma kod 2 ggr vilket
vi försöker undvika.


Det finns en metod att skapa objekt ifrån en "ritning"
kallas i programspråk för class.
 
Då kan man skapa många objekt från en o samma class.

Och behöver man ändra i koden är det bara ändra i den classen.



*/

  class Veicle{                        // Deklarerar en class som heter Veicle
      constructor(make,color){         // Här deklarers alla parametrar.
        this.make=make;
        this.color=color;
      }
      drive(){                         // En funktion som finns i en class 
        console.log("driving");        // Kallas för metod.
      }
  }


 let car = new Veicle("Volvo","Green");    // Skapar ett objekt som får namnet car.
 let truck = new Veicle("Scania","Black"); // Spakar ett objekt som får namnet truck.


 // Det finns två sätt att komma åt parametrar i ett objekt.
  console.log(car.color);       // dot notation
  console.log(truck["color"]);  // bracket notation

  
