module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: ['add-module-exports'],
  env: {
    build: {
      ignore: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.story.tsx',
        '__snapshots__',
        '__tests__',
        '__stories__',
      ],
    },
  },
  ignore: ['node_modules'],
};
