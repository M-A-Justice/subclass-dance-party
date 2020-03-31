var makeLineDancer = function(top, left, timeBetweenSteps, addClass) {
  // left = 50;
  top = 50;
  makeDancer.call(this, top, left, timeBetweenSteps, addClass);
};

makeLineDancer.prototype = Object.create(makeDancer.prototype);
makeLineDancer.prototype.constructor = makeLineDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };