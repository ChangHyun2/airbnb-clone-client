export * from './components';
export * from './stylesheet';

import * as alignChild from './stylesheet/alignChild';
import * as mediaQuery from './stylesheet/mediaQuery';
import * as pallete from './stylesheet/pallete';
import * as styling from './stylesheet/styling';
import * as typo from './stylesheet/typo';
import * as zIndex from './stylesheet/zIndex';
import * as effect from './stylesheet/effect';
import * as size from './stylesheet/size';

import * as AlignChildComponents from './components/alignChild';
import * as AlignSelfComponents from './components/alignSelf';
import * as TextComponents from './components/text';

const S = {
  pallete,
  ...mediaQuery,
  ...styling,
  ...zIndex,
  ...typo,
  ...alignChild,
  ...effect,
  ...size,

  ...AlignChildComponents,
  ...AlignSelfComponents,
  ...TextComponents,
};

export default S;
