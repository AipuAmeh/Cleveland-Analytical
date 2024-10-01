import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import theme from './utils/Themes.tsx';
import HomePage from './pages/HomePage.tsx';
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // error: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
<RouterProvider router={router} />
  </ChakraProvider>
)

