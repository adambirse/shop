/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 35,
      lines: 30,
      statements: 29,
    },
  },
};
