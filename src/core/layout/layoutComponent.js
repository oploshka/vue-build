
import LAYOUT from "@layout/layoutName";

import LayoutDefault from "./template/default";
import LayoutCenterBlock from "./template/block-center";
import LayoutFullscreen from "./template/fullscreen";

const LAYOUT_COMPONENT = {
  [LAYOUT.DEFAULT]     :  LayoutDefault,
  [LAYOUT.BLOCK_CENTER]:  LayoutCenterBlock,
  [LAYOUT.FULLSCREEN]:    LayoutFullscreen,
};

export default LAYOUT_COMPONENT;