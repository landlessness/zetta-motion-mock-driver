var zetta = require('zetta');
var Motion = require('../index');
var style = require('./apps/style');

zetta()
  .use(Motion)
  .use(style)
  .listen(1337);
