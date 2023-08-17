import styled from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import SearchPage from './MainPage/MainPage';
import MainMenu from './Menu/MainMenu';

const queryClient = new QueryClient();

const MainContent = styled.div`
  margin: 50px;
`;

const App = () => (
  <div className="App">
    <MainMenu />
    <QueryClientProvider client={queryClient}>
      <MainContent>
        <SearchPage />
      </MainContent>
    </QueryClientProvider>
  </div>
);

export default App;
