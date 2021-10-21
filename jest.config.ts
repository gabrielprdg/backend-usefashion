export default  {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  coverageProvider: "babel",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
