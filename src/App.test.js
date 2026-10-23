import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio shell and primary sections', () => {
  const { container } = render(<App />);

  // Desktop and mobile navigation may both be present in the responsive layout.
  expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/AI-driven workflow/i)).toBeInTheDocument();
  expect(container.querySelectorAll('.hero-node-orbit')).toHaveLength(4);
  expect(container.querySelector('#ai-engineering')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /applied ai/i })).toHaveAttribute('href', '#ai-engineering');
  expect(container.querySelector('#project')).toBeInTheDocument();
  expect(container.querySelector('#connect')).toBeInTheDocument();

  const sectionHeadings = Array.from(container.querySelectorAll('section'))
    .map((section) => section.querySelector('h2, h3')?.textContent.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  expect(sectionHeadings.indexOf('Intelligence, engineered.')).toBeLessThan(
    sectionHeadings.indexOf('Built across the stack.')
  );
  expect(sectionHeadings.indexOf('Built across the stack.')).toBeLessThan(
    sectionHeadings.indexOf('From question to grounded answer.')
  );
});
