module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: '>0.25%',
            node: '8.9',
            esmodules: true,
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
      '@babel/preset-typescript',
    ],
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
};
