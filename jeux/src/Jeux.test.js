import { render, screen } from '@testing-library/react';
import Jeux from "./Jeux";

test('renders learn react link', () => {
  render(<Jeux />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
