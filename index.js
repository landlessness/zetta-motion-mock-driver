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
    .state('deactivated')
    .when('deactivated', {allow: ['activate']})
    .when('activated', {allow: ['deactivate']})
    .map('activate', this.activate)
    .map('deactivate', this.deactivate);

};

Motion.prototype.activate = function(cb) {
  this.state = 'activated';
  cb();
}

Motion.prototype.deactivate = function(cb) {
  this.state = 'deactivated'
  cb();
}
