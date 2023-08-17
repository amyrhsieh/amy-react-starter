import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

const queryClient = new QueryClient();

test('renders MainPage component', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
  await screen.findByRole('textbox');
});
