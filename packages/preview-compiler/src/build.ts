import glob from 'glob';
import buildPreview from './processPreview';
import { createFullPath, parsePath } from './fsUtils';

const build = (opts: {}): void => {
  const config = opts;
  // we add the required directory in public folder
  createFullPath(`${config.basePath}/${config.distPath}`);

  glob
    .sync(`${config.basePath}/${config.srcPath}/**/_previews/*.html`)
    .forEach((filePath) => {
      const parsedPath = parsePath(config, filePath);
      console.log(parsedPath);
      buildPreview(parsedPath, filePath);
    });
};

export default build;
