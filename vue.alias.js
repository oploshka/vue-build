const path = require('path');

const alias = {
  
  // resource
  '@img'            : path.join(__dirname, './resource/img'         ),
  '@icon'           : path.join(__dirname, './resource/icon'        ),
  '@font'           : path.join(__dirname, './resource/font'        ),
  '@style'          : path.join(__dirname, './resource/style'       ),
  '@lang'           : path.join(__dirname, './resource/lang'        ),

  
  // core
  '@core'           : path.join(__dirname, './src/core'      ),
  '@user'           : path.join(__dirname, './src/core/user'  ), // TODO: подумать куда и где разместить
  '@router'         : path.join(__dirname, './src/core/router'      ), // TODO: подумать о необходимости
  '@layout'         : path.join(__dirname, './src/core/layout'    ),
  '@loading'        : path.join(__dirname, './src/core/loading'   ),
  
  // etc - настройки и конфигурация
  '@entity'         : path.join(__dirname, './src/etc/entity'      ),
  '@enum'           : path.join(__dirname, './src/etc/enum'        ), // TODO: подумать о необходимости
  '@config'         : path.join(__dirname, './src/etc/config'      ), // TODO: подумать о необходимости
  '@filter'         : path.join(__dirname, './src/etc/filter'      ),
  // '@router'         : path.join(__dirname, './src/etc/router'      ), // TODO: подумать о необходимости
  
  //
  '@store'          : path.join(__dirname, './src/store'       ),
  
  // usr
  '@library'        : path.join(__dirname, './src/usr/library'     ),
  '@plugin'         : path.join(__dirname, './src/usr/plugin'      ),
  '@service'        : path.join(__dirname, './src/usr/service'     ),
  
  // site2
  '@field'          : path.join(__dirname, './src/site2/field'     ),
  // '@layout'         : path.join(__dirname, './src/site2/layout'    ),
  // '@loading'        : path.join(__dirname, './src/site2/loading'   ),
  '@widget'         : path.join(__dirname, './src/site2/widget'    ),
  '@mixin'          : path.join(__dirname, './src/site2/mixin'     ),
  
  // base site
  '@page'           : path.join(__dirname, './src/site/page'        ),
  '@component'      : path.join(__dirname, './src/site/component'   ),
  '@part'           : path.join(__dirname, './src/site/part'        ),
  
  //
  '@test'           : path.join(__dirname, './test'),


  // auth

  // eslint-disable-next-line comma-dangle
  
  
  // перебрать
  '@middleware'     : path.join(__dirname, './src/core/middleware'  ),
  '@public'         : path.join(__dirname, './public'               ),
  '@'               : path.join(__dirname, './src'                  ),
  
  '@permission'       : path.join(__dirname, './src/core/user/permission'  ),
  '@widgetPermission' : path.join(__dirname, './src/core/user/permission/component'),
  '@plugin-vue-dlg' : path.join(__dirname, './node_modules/vue-dlg/src'),
  
  // test
  // '@fixtures'       : path.join(__dirname, './test/fixtures'        ),
};

module.exports = alias;
