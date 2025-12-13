import '@testing-library/jest-dom';

// Basic smoke test to ensure test infrastructure is working
test('test infrastructure is working', () => {
  expect(true).toBe(true);
});

// Test that critical modules can be imported without errors
test('App module can be imported', () => {
  const App = require('./App');
  expect(App).toBeDefined();
  expect(typeof App.default).toBe('function');
});
