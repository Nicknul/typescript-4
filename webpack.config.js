const path = require('path');

const name = 'index';

module.exports = {
  entry: `/dist/${name}.js`,
  output: {
    path: path.resolve(__dirname, 'dist '),
    filename: `${name}.bundle.js`,
  },
};
