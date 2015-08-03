var app = require('express')();

var appname = process.env.APP_NAME || "unnamed-app";

var nodeEmberCliDeployRedis = require('node-ember-cli-deploy-redis');
app.use('/*', nodeEmberCliDeployRedis(appname, {
  host: 'redis',
  port: 6379,
  database: 0
}));

module.exports = app;
