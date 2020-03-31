var makeBlinkyDancer = function(top, left, timeBetweenSteps, addClass) {
  makeDancer.call(this, ...arguments);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};