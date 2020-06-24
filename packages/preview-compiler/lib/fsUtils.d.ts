import { Config } from './initialize';
export declare const createWriteDir: (config: Config, filepath: string) => string;
export declare const createFullPath: (dir: string) => Promise<string>;
export interface ParsedPath {
    previewName: string;
    dirname: string;
    writeDir: string;
    ext: string;
}
export declare const parsePath: (config: Config, filepath: string) => {
    previewName: string;
    dirname: string;
    writeDir: string;
    ext: string;
};
