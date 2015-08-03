var app = require('express')();

var nodeEmberCliDeployRedis = require('node-ember-cli-deploy-redis');
app.use('/*', nodeEmberCliDeployRedis('myapp', {
  host: 'redis',
  port: 6379,
  database: 0
}));

module.exports = app;
