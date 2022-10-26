
import LayoutInit from '@layout/LayoutInit.js';

export const LAYOUT = {};
export const LAYOUT_COMPONENT = {};

const setLayout = (name, component) => {
  LAYOUT[name] = name;
  LAYOUT_COMPONENT[name] = component;
};

LayoutInit(setLayout);
