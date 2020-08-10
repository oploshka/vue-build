const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@img'  : path.join(__dirname, 'resource/img'),
      '@font' : path.join(__dirname, 'resource/font'),
      '@style': path.join(__dirname, 'resource/style'),
      '@lang' : path.join(__dirname, 'resource/lang'),
      '@'     : path.join(__dirname, 'src'),
    }
  },
};
