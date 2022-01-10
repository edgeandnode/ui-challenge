import { ThemeProvider } from 'theme-ui'
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}><QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
