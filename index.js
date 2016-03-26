var Device = require('zetta-device');
var util = require('util');

var Motion = module.exports = function() {
  Device.call(this);
};
util.inherits(Motion, Device);

Motion.prototype.init = function(config) {
  config
    .name('Motion')
    .type('motion')
    .state('no-motion')
    .when('motion', {allow: ['no-motion']})
    .when('no-motion', {allow: ['motion']})
    .map('motion', this.motion)
    .map('no-motion', this.noMotion);

};

Motion.prototype.motion = function(cb) {
  this.state = 'motion';
  cb();
}

Motion.prototype.noMotion = function(cb) {
  this.state = 'no-motion'
  cb();
}
