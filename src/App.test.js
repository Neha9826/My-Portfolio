import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio shell and primary sections', () => {
  const { container } = render(<App />);

  // Desktop and mobile navigation may both be present in the responsive layout.
  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(container.querySelector('#ai-engineering')).toBeInTheDocument();
  expect(container.querySelector('#project')).toBeInTheDocument();
  expect(container.querySelector('#connect')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /applied ai/i })).toHaveAttribute('href', '#ai-engineering');
});
