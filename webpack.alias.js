const path = require('path');

module.exports = {
  resolve: {
    alias: {
      //
      // '@FormValidate'  : path.join(__dirname, 'src/component/FormValidate'),
      //
      '@img'  : path.join(__dirname, 'resource/img'),
      '@font' : path.join(__dirname, 'resource/font'),
      '@style': path.join(__dirname, 'resource/style'),
      // '@lang' : path.join(__dirname, 'resource/lang'),
      //
      '@page'       : path.join(__dirname, 'src/page'),
      '@component'  : path.join(__dirname, 'src/component'),
      '@'           : path.join(__dirname, 'src'),
    }
  },
};
