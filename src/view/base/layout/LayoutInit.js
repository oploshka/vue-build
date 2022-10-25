
import LayoutDefault      from './LayoutDefault';
import LayoutBlockCenter  from './LayoutBlockCenter';
import LayoutFullscreen   from './LayoutFullscreen';

import LAYOUT from './LayoutName'

export default (setLayout) => {
  setLayout(LAYOUT.DEFAULT,       LayoutDefault);
  setLayout(LAYOUT.BLOCK_CENTER,  LayoutBlockCenter);
  setLayout(LAYOUT.FULLSCREEN,    LayoutFullscreen);
};
