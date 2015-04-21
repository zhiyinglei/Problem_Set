module.exports = Animal;
module.exports = Snake;


function Animal(name) {
  this.name = name;
};
Animal.prototype.move = function(meters) {
  console.log(this.name+" moved "+meters+"m.");
};

function Snake() {
  Animal.apply(this, Array.prototype.slice.call(arguments));
};


Snake.prototype = new Animal();


Snake.prototype.move = function(meters) {
  console.log("Slithering...");
  Animal.prototype.move.call(this, meters);
};



