const path = require('path');

const alias = {
  
  // resource
  '@img'            : path.join(__dirname, './resource/img'         ),
  '@icon'           : path.join(__dirname, './resource/icon'        ),
  '@font'           : path.join(__dirname, './resource/font'        ),
  '@style'          : path.join(__dirname, './resource/style'       ),
  '@lang'           : path.join(__dirname, './resource/lang'        ),

  
  // core
  '@core'           : path.join(__dirname, './src/core'             ),
  '@user'           : path.join(__dirname, './src/core/user'        ), // TODO: подумать куда и где разместить
  '@permission'     : path.join(__dirname, './src/core/user/permission'),
  '@loading'        : path.join(__dirname, './src/core/loading'     ),
  
  // etc - настройки и конфигурация
  '@entity'         : path.join(__dirname, './src/etc/entity'       ),
  '@enum'           : path.join(__dirname, './src/etc/enum'         ), // TODO: подумать о необходимости
  '@config'         : path.join(__dirname, './src/etc/config'       ), // TODO: подумать о необходимости
  '@filter'         : path.join(__dirname, './src/etc/filter'       ),
  '@router'         : path.join(__dirname, './src/etc/router'       ), // TODO: подумать о необходимости
  
  // usr
  '@library'        : path.join(__dirname, './src/usr/library'      ),
  '@plugin'         : path.join(__dirname, './src/usr/plugin'       ),
  '@service'        : path.join(__dirname, './src/usr/service'      ),
  '@store'          : path.join(__dirname, './src/usr/store'        ),
  
  // site
  '@page'           : path.join(__dirname, './src/view/page'        ),
  '@component'      : path.join(__dirname, './src/view/component'   ),
  // site base
  '@field'          : path.join(__dirname, './src/view/base/field'  ),
  '@layout'         : path.join(__dirname, './src/view/base/layout' ),
  // '@loading'        : path.join(__dirname, './src/view/base/loading'   ),
  '@part'           : path.join(__dirname, './src/view/base/part'   ),
  '@widget'         : path.join(__dirname, './src/view/base/widget' ),
  '@mixin'          : path.join(__dirname, './src/view/base/mixin'  ),
  
  // default
  '@'               : path.join(__dirname, './src'),
  '@test'           : path.join(__dirname, './test'),


  // перебрать
  // '@middleware'     : path.join(__dirname, './src/core/middleware'  ),
  // '@public'         : path.join(__dirname, './public'               ),
  // '@widgetPermission' : path.join(__dirname, './src/core/user/permission/component'),
  // '@plugin-vue-dlg' : path.join(__dirname, './node_modules/vue-dlg/src'),
  // '@fixtures'       : path.join(__dirname, './test/fixtures'        ),   // test
};

module.exports = alias;
