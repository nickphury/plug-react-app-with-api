import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Plug with nest api link', () => {
  render(<App />);
  const linkElement = screen.getByText('Plug with nest api');
  expect(linkElement).toBeInTheDocument();
  debugger;
});
