const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api"], { target: "https://teacho-india.herokuapp.com" })
    );
  };