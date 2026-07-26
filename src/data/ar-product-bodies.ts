﻿﻿﻿﻿import { arProductBodies1 } from './ar-product-bodies-1';
import { arProductBodies2 } from './ar-product-bodies-2';
import { arProductBodies3 } from './ar-product-bodies-3';

const arProductBodies: Record<string, string> = {
  ...arProductBodies1,
  ...arProductBodies2,
  ...arProductBodies3,
};

export default arProductBodies;
