export default {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://webengineering.ins.hs-anhalt.de:10151",},
          { key: "Access-Control-Allow-Methods",value: "GET, DELETE, POST, PUT, OPTIONS", },
          { key: "Access-Control-Allow-Headers",value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",},
          { key: "AllowCredentials", value: "True",},
        ],
      },
    ];
  },
};