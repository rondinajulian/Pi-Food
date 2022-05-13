import { render, screen } from '@testing-library/react';
import App from './App';

test('Texto Landing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my recipe page/i);
  expect(linkElement).toBeInTheDocument();
});


