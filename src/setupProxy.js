const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log('createProxyMiddleware')
  app.use(
    createProxyMiddleware('/api',{
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};