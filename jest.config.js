module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
    },
  },
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  transform: {
    '\\.(jpg|jpg|png|gif|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$': '<rootDir>/jest/fileTransform.js',
  },
};
