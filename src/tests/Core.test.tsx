import React from 'react';
import { render, screen } from '@testing-library/react';
import Core from '../App';

test('renders learn react link', () => {
  render(<Core />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
