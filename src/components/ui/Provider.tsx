import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../../contexts/auth.context';

const queryClient = new QueryClient();

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ChakraProvider value={defaultSystem}>
            {children}
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
