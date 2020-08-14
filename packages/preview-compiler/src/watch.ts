import liveServer from 'live-server';
import chokidar from 'chokidar';

import buildPreview from './processPreview';
import { createFullPath, parsePath } from './fsUtils';

import { Config } from './initialize';

const watch = (opts: Config): void => {
  const config = opts;
  // we add the required directory in public folder
  createFullPath(`${config.basePath}/${config.distPath}`);

  // watch for changes within files
  chokidar
    .watch(`${config.basePath}/${config.srcPath}/**/_previews/*`)
    .on('change', (filePath) => {
      const parsedPath = parsePath(config, filePath);
      buildPreview(parsedPath, filePath);
    });

  const params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: `${config.basePath}/${config.distPath}`, // Set root directory that's being served. Defaults to cwd.
    wait: 100, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  };

  liveServer.start(params);
};

export default watch;
