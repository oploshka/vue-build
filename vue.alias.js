const path = require('path');

const alias = {
  // widget
  '@widgetFormValidate'   : path.join(__dirname, './src/component/Widget/FormValidate'),
  '@widgetFormGenerate'   : path.join(__dirname, './src/component/Widget/FormGenerate'),
  '@widgetLoader'         : path.join(__dirname, './src/component/Widget/Loader'),
  '@widgetPermission'     : path.join(__dirname, './src/component/Widget/Permission'),

  // resource
  '@img'            : path.join(__dirname, './resource/img'         ),
  '@font'           : path.join(__dirname, './resource/font'        ),
  '@style'          : path.join(__dirname, './resource/style'       ),
  '@lang'           : path.join(__dirname, './resource/lang'        ),
  '@public'         : path.join(__dirname, './public'               ),

  // system
  '@entity'         : path.join(__dirname, './src/core/entity'      ),
  '@enum'           : path.join(__dirname, './src/core/enum'        ),
  '@filter'         : path.join(__dirname, './src/core/filter'      ),
  '@layout'         : path.join(__dirname, './src/core/layout'      ),
  '@library'        : path.join(__dirname, './src/core/library'     ),
  '@middleware'     : path.join(__dirname, './src/core/middleware'  ),
  '@permission'     : path.join(__dirname, './src/core/permission'  ),
  '@plugin'         : path.join(__dirname, './src/core/plugin'      ),
  '@router'         : path.join(__dirname, './src/core/router'      ),
  '@service'        : path.join(__dirname, './src/core/service'     ),
  '@store'          : path.join(__dirname, './src/core/store'       ),

  // service fix
  '@requestManager' : path.join(__dirname, './src/core/service/RequestManager/src' ),

  // base
  '@page'           : path.join(__dirname, './src/page'             ),
  '@component'      : path.join(__dirname, './src/component'        ),
  '@'               : path.join(__dirname, './src'                  ),

  // test
  // '@fixtures'       : path.join(__dirname, './test/fixtures'        ),
};

module.exports = alias;
