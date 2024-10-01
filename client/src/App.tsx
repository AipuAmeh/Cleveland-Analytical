import { Outlet } from 'react-router-dom'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
 <Box>
  <Header />
  <Box>
  <Outlet />
  </Box>
  <Footer />
 </Box>
  )
}

export default App
