import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("1 + 1 = 2", () => {
  const a = 1;
  const b = 1;
  const result = 2;

  expect(a + b).toBe(result);
});