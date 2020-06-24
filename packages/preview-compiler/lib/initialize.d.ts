#!/usr/bin/env node
export interface Config {
    subPath?: string;
    basePath: string;
    srcPath: string;
    distPath: string;
}
declare const config: Config;
export default config;
