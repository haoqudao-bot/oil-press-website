﻿﻿﻿﻿import { idProductBodies1 } from './id-product-bodies-1';
import { idProductBodies2 } from './id-product-bodies-2';
import { idProductBodies3 } from './id-product-bodies-3';

const idProductBodies: Record<string, string> = {
  ...idProductBodies1,
  ...idProductBodies2,
  ...idProductBodies3,
};

export default idProductBodies;
