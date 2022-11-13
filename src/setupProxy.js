const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/v1/products", {
      target: "https://api.escuelajs.co",
      changeOrigin: true,
    })
  );
};
