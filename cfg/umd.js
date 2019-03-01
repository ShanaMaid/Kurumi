const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    Kurumi: path.resolve(__dirname, '../src/Kurumi.ts')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../lib/'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'Kurumi',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['ts-loader'],
        include: [
          path.resolve(__dirname, '../src/'),
        ],
      }
    ]
  },
  optimization: {
    minimize: false,
  },
  devtool: false  
}