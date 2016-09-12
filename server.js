var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3001/');
});

server.use(middlewares);
server.use(router);
server.listen(3000, function() {
  console.log('json-server running on port 3000');
});