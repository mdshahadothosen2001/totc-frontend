import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </BrowserRouter>
    
  )
}
