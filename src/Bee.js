var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
//console.log(Bee.prototype.constructor);
Bee.prototype.constructor = Bee;
console.log(Bee.prototype.constructor);