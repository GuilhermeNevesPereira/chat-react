import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const texto = screen.getByText(/Chat React/i);
  expect(texto).toBeInTheDocument();
});
