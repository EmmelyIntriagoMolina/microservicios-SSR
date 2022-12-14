const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/app/index.js',
    output: {
      path: __dirname + '/src/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
       ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
};