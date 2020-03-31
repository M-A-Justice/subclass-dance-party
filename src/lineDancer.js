var makeLineDancer = function(top, left, timeBetweenSteps, addClass) {
  makeDancer.call(this, top, left, timeBetweenSteps, addClass);
};

makeLineDancer.prototype = Object.create(makeDancer.prototype);
makeLineDancer.prototype.constructor = makeLineDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };