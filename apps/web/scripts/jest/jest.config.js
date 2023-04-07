const path = require('path');
/*
* __dirname: ./scripts/jest
* */
module.exports = {
    rootDir: process.cwd(),
    globals: {
        'ts-jest': {
            tsConfig: path.resolve(__dirname, '../../tsconfig.test.json'),
        },
    },
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testMatch: ['<rootDir>/**/*.(spec|test).(ts|tsx|js)'],
    collectCoverage: false,
    collectCoverageFrom: [
        '<rootDir>/**/*.ts',
        '!<rootDir>/**/store.ts',
        '!<rootDir>/**/*.d.ts',
    ],
    preset: 'ts-jest',
};
