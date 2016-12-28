/* eslint-disable no-console */

import { create as createDiffy } from '../../dist/diffy.min.js';

const diffy = createDiffy({
  resolution: { x: 20, y: 15 },
  sensitivity: 0.5,
  threshold: 0X15,
  debug: true
});

window.diffy = diffy;