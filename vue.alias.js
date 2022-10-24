const path = require('path');

const alias = {
  //
  '@field'          : path.join(__dirname, './src/formField'),
  '@plugin-vue-dlg' : path.join(__dirname, './node_modules/vue-dlg/src'),
  // resource
  // eslint-disable-next-line space-in-parens
  '@img'            : path.join(__dirname, './resource/img'         ),
  '@icon'           : path.join(__dirname, './resource/icon'        ),
  '@font'           : path.join(__dirname, './resource/font'        ),
  '@style'          : path.join(__dirname, './resource/style'       ),
  '@lang'           : path.join(__dirname, './resource/lang'        ),
  '@public'         : path.join(__dirname, './public'               ),
  // system
  '@entity'         : path.join(__dirname, './src/core/entity'      ),
  '@mixin'          : path.join(__dirname, './src/core/mixin'       ),
  '@enum'           : path.join(__dirname, './src/core/enum'        ),
  '@filter'         : path.join(__dirname, './src/core/filter'      ),
  '@layout'         : path.join(__dirname, './src/core/layout'      ),
  '@library'        : path.join(__dirname, './src/core/library'     ),
  '@loading'        : path.join(__dirname, './src/core/loading'     ),
  '@middleware'     : path.join(__dirname, './src/core/middleware'  ),
  '@plugin'         : path.join(__dirname, './src/core/plugin'      ),
  '@router'         : path.join(__dirname, './src/core/router'      ),
  '@service'        : path.join(__dirname, './src/core/service'     ),
  '@store'          : path.join(__dirname, './src/core/store'       ),
  //
  '@test'           : path.join(__dirname, './test'),


  // auth
  '@user'             : path.join(__dirname, './src/core/user'  ),
  '@permission'       : path.join(__dirname, './src/core/user/permission'  ),
  '@widgetPermission' : path.join(__dirname, './src/core/user/permission/component'),

  // base
  '@page'           : path.join(__dirname, './src/page'             ),
  '@component'      : path.join(__dirname, './src/component'        ),
  '@widget'         : path.join(__dirname, './src/widget'           ),
  // eslint-disable-next-line comma-dangle
  '@'               : path.join(__dirname, './src'                  ),

  // test
  // '@fixtures'       : path.join(__dirname, './test/fixtures'        ),
};

module.exports = alias;
