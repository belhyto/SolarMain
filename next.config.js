module.exports = {
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.mp4$/,
          use: 'url-loader',
        }
      );
  
      return config;
    },
  };
  