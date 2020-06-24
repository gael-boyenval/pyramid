import path from 'path';
import { mkdir } from 'fs/promises';

import { Config } from './initialize';

export const createWriteDir = (config: Config, filepath: string) => {
  const removedLastPreview = path
    .dirname(filepath)
    .split('/')
    .filter((i) => i !== 'previews')
    .join('/');

  const distPath = removedLastPreview
    .replace(config.srcPath, config.distPath)
    .replace(config.srcPath, config.distPath)
    .toLowerCase();

  return path.resolve(config.basePath, distPath);
};

export const createFullPath = (dir: string) => mkdir(dir, { recursive: true });

export interface ParsedPath {
  previewName: string;
  dirname: string;
  writeDir: string;
  ext: string;
}

export const parsePath = (config: Config, filepath: string) => ({
  previewName: path
    .basename(filepath)
    .replace('.preview.', '.')
    .replace(path.extname(filepath), ''),
  dirname: path.resolve(config.basePath, path.dirname(filepath)),
  writeDir: createWriteDir(config, filepath),
  ext: path.extname(filepath),
});
