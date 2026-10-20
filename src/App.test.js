import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio shell', () => {
  render(<App />);
  // The page intentionally has both header and footer navigation landmarks.
  expect(screen.getByRole('link', { name: /Neha Pattnayak home/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /footer navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument();
});
