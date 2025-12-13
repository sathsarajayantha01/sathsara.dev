import '@testing-library/jest-dom';
import App from './App';

// Basic smoke test to ensure test infrastructure is working
test('test infrastructure is working', () => {
  expect(true).toBe(true);
});

// Test that critical modules can be imported without errors
test('App module can be imported', () => {
  expect(App).toBeDefined();
  expect(typeof App).toBe('function');
});
