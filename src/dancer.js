// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, addClass) {
  this.$node = $('<span class="dancer"></span>');
  this.$node.addClass(addClass);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // var context = this;
  // setTimeout(function() {
  //   context.step();
  // }, this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // setTimeout(() => {this.step()}, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var random = Math.floor(Math.random() * (4 - 1) + 1);
  var styleSettings = {
    top: top,
    left: left,
    'background-image': `url(images/${random}.gif)`
  };
  this.$node.css(styleSettings);
};