module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            publicPath: './src/assets',
          },
        },
      ],
    },
  };