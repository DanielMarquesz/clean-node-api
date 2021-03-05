export default {
  roots: ['<rootsDir>/src'],
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: { '.+\\.ts$': 'ts-jest' },
  coverageProvider: 'v8',
  testEnvironment: 'node'
}
