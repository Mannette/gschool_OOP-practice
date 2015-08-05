// Intro to OOP //

console.log('sanity check');
// // Base Class
// var Vehicle = function(wheels, color) {
//   // properties
//   this.weels = 4;
//   this.color = 'black';
// };
//
// // Instances
// var blackCar = new Vehicle(4, 'red');
// console.log(car);


// Base Class - constructor
var Vehicle = function(wheels, color) {
  // properties
  this.wheels = wheels;
  this.color = color;
};

// Methods
Vehicle.prototype.honk = function() {
  return 'honk!';
};
Vehicle.prototype.toString = function() {
  return 'The vehicle has ' + this.wheels + ' wheels and is ' + this.color + '.';
};

// Car Class
var Car = function(color) {
  this.wheels = 4;
  this.color = color;
};

// Sets car sub-class to inherit from Vehicle base class
Car.prototype = new Vehicle();
Car.prototype.drive = function(distance) {
  return "The car traveled " + distance + " miles!";
};
Car.prototype.honk = function() {
  return 'car honk!';
};

// Instance of the Car sub-class
var redCar = new Car(4, 'red');
console.log(redCar);
console.log(redCar.honk());
console.log(redCar.drive(10));
console.log(redCar.toString());

// Instance of the Vehicle base class
var smallMotorcycle = new Vehicle(2, 'black');
console.log(smallMotorcycle);
console.log(smallMotorcycle.honk());
console.log(smallMotorcycle.toString());

//------------- CHALLENGES --------------------
// ** challenge 1 **
var Song = function(songName, bandName) {
  // properties
  this.song = songName;
  this.band = bandName;
};

// Methods
Song.prototype.countName = function() {
  return this.song.split(' ').length;
};
Song.prototype.createElement = function() {
  return $('<div>').text(this.song + " by " + this.band);
};


// Instances
var music = new Song('Through the Fire and Flames', 'Dragonforce');
console.log(music);
console.log(music.countName());
console.log(music.createElement());
$('body').append(music.createElement());

// ** challenge 2 **
// create methods..
  // getFullName()
  // getFirstName()
  // getLastName()
var Person = function(firstAndLastName) {
  this.firstAndLastName = firstAndLastName;
  this.isInstructor = true;
};

// Person class methods
Person.prototype.getFullName = function() {
  return this.firstAndLastName;
};
Person.prototype.getFirstName = function() {
  return this.firstAndLastName.split(' ')[0];
};
Person.prototype.getLastName = function() {
  return this.firstAndLastName.split(' ')[1];
};

// student sub-class
var Student = function(firstAndLastName) {
  this.firstAndLastName = firstAndLastName;
  this.isInstructor = false;
};
Student.prototype = new Person();


var michael = new Person('Michael Herman');
console.log(michael);
console.log(michael.getFullName());
console.log(michael.getFirstName());
console.log(michael.getLastName());

var ethan = new Student('Ethan Mannette');
console.log(ethan);
console.log(ethan.getFullName());
console.log(ethan.getFirstName());
console.log(ethan.getLastName());
