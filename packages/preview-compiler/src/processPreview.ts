import postcssconfig from '@pyramid/postcss-config';
import postcss from 'postcss';
import { readFile, readdir, writeFile } from 'fs/promises';
import path from 'path';
import { createFullPath, ParsedPath } from './fsUtils';

const template = (
  html: string,
  css: string,
  javascript: string,
  title: string,
): string => `
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    ${css}
  </style>
  <script>
    ${javascript}
  </script>
</head>

<body>
${html}
</body>

</html>
`;

const processCSS = (
  from: string,
  to: string,
  code: string,
): postcss.LazyResult =>
  postcss(postcssconfig).process(code, {
    from,
    to,
  });

const handleHtml = (filename: string, directory: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const filePath = `${directory}/${filename}`;
    console.log('html : ' + filePath);

    readFile(filePath, 'utf8')
      .then((content) => resolve(content))
      .catch((err) => reject(err));
  });

const handleSCSS = (filename: string, directory: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const filePath = `${directory}/${filename}`;
    console.log('scss : ' + filePath);
    readFile(filePath, 'utf8').then((content) =>
      processCSS(filePath, filePath, content)
        .then((result) => resolve(result.css))
        .catch((err) => reject(err)),
    );
  });

const handleJS = (filename: string, directory: string): Promise<string> =>
  new Promise((resolve) => {
    const filePath = `${directory}/${filename}`;
    readFile(filePath, 'utf8')
      .then((content) => resolve(content))
      .catch((err) => resolve(''));
  });

const handleFiles = (files: string[], directory: string) => {
  const htmlFile = files.find((file) => file.endsWith('.html'));
  const scssFile = files.find((file) => file.endsWith('.scss'));
  const jsFile = files.find((file) => file.endsWith('.js'));
  console.log(htmlFile);
  console.log(files);

  return Promise.all([
    handleHtml(htmlFile, directory),
    handleSCSS(scssFile, directory),
    handleJS(jsFile, directory),
  ]);
};

const getRelatedFiles = async (filePath: string): Promise<string> => {
  const files = await readdir(path.dirname(filePath));

  const previewName = path
    .basename(filePath)
    .replace(path.extname(filePath), '');

  const relatedFiles = files.filter(
    (file) => file.replace(path.extname(file), '') === previewName,
  );

  return handleFiles(relatedFiles, path.dirname(filePath))
    .then(([html, css, js]) =>
      Promise.resolve(template(html, css, js, previewName)),
    )
    .catch((err) => Promise.reject(err));
};

const processPreview = (
  parsedPath: ParsedPath,
  filePath: string,
): Promise<void> => {
  console.log('-----------------------------');
  console.log(parsedPath);
  console.log('-----------------------------');

  return createFullPath(parsedPath.writeDir)
    .then(() => getRelatedFiles(filePath))
    .then((content) => {
      return writeFile(
        `${parsedPath.writeDir}/${parsedPath.previewName}.html`,
        content,
      );
    })
    .catch((err) => {
      throw console.error(err);
    });
};

export default processPreview;
