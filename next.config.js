module.exports = {
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "@compiled/webpack-loader",
        },
      ],
    });

    return config;
  },
};
