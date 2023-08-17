import { render, screen } from '@testing-library/react';
import MainMenu from './MainMenu';

test('renders MainMenu component', () => {
  render(<MainMenu />);

  screen.getByText('Menu 1');
  screen.getByText('Menu 2');
});
