#!/usr/bin/env node
import config from './initialize';
import build from './build';

export default build(config);
