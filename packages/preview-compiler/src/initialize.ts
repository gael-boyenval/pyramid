#!/usr/bin/env node
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';

clear();

// eslint-disable-next-line no-console
console.log(
  chalk.yellow(figlet.textSync('Pyramid', { horizontalLayout: 'full' })),
);

const caller = process.cwd();

export interface Config {
  subPath?: string;
  basePath: string;
  srcPath: string;
  distPath: string;
}

const config: Config = {
  subPath: null,
  basePath: caller,
  srcPath: 'src/lib',
  distPath: 'previews',
};

export default config;
