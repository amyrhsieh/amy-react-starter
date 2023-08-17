import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

test('renders SearchBox component', () => {
  const handleChange = jest.fn();
  render(
    <SearchBox
      value="test value"
      handleChange={handleChange}
    />
  );

  const input = screen.getByRole('textbox');
  fireEvent.change(input, {target: {value: 'new value'}});
  expect(handleChange).toHaveBeenCalledWith('new value');
});
