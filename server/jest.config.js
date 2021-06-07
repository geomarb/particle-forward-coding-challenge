module.exports = {
  bail: true,
  verbose: true,
  coverageProvider: true,
  displayName: { name: "API", color: "blue" },
  errorOnDeprecated: true,
  clearMocks: true,
  roots: ["<rootDir>/src/__tests__"],
  globalSetup: "<rootDir>/src/__tests__/setup.js",
  moduleFileExtensions: ["js", "json"],
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
};
