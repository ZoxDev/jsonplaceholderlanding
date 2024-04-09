import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from './views/LandingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage></LandingPage>
    </QueryClientProvider>
  );
}

export default App;
