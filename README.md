# ember-express-redis

A [dockerized](http://docker.com) [Node](http://nodejs.org) server for serving [ember.js](http://emberjs.com) index.html from [redis](http://redis.io) written with [express.js](http://expressjs.com).

Uses [node-ember-cli-deploy-redis](https://github.com/blimmer/node-ember-cli-deploy-redis).

## Docker repo

[Docker hub](https://registry.hub.docker.com/u/thomassnielsen/ember-express-redis/)

## Build yourself

Build:

```
docker build -t ember-express-redis .
```

Run interactive on port 3000:
```
docker run -it -p 3000:80 --rm --link my-redis-container:redis --name testing-ember-express-redis ember-express-redis
```

Run permanently on port 80:
```
docker run -d -p 80 --link my-redis-container:redis --name testing-ember-express-redis ember-express-redis
```
