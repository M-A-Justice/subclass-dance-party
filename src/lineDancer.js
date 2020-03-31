var makeLineDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, ...arguments);
};

makeLineDancer.prototype = Object.create(makeDancer.prototype);
makeLineDancer.prototype.constructor = makeLineDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// };