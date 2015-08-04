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
var Vehicle = function(numberOfWheels, carColor) {
  // properties
  this.wheels = numberOfWheels;
  this.color = carColor;
};

// Methods
Vehicle.prototype.honk = function() {
  return 'honk!';
};
Vehicle.prototype.toString = function() {
  return 'The vehicle has ' + this.wheels + ' wheels and is ' + this.color + '.';
};

// Instances
var redCar = new Vehicle(4, 'red');
console.log(redCar);
console.log(redCar.honk());
console.log(redCar.toString());

// challenges
var Song = function(songName, bandName) {
  // properties
  this.song = songName;
  this.band = bandName;
};

// Methods
Song.prototype.countName = function() {
  return this.song.split('').length;
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
