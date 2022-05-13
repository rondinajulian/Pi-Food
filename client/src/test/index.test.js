import { render, screen } from '@testing-library/react';
import App from '../App';

it('Always true',()=>{
    expect(true).toBe(true);
})

test('Landing page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello, you are about to enter my PI, a project created for Henry's bootcamp./i);
    expect(linkElement).toBeInTheDocument();
  });
  