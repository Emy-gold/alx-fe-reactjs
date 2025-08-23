import { QueryClient, QueryClientProvider } from 'react-query';
import PostComponent from './components/PostComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App
