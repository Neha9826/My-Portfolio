import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio shell', () => {
  render(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument();
});
