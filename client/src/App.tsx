import { Outlet } from 'react-router-dom'
import './App.css'
import { Box } from '@chakra-ui/react'
import Footer from './components/Footer'

function App() {

  return (
 <Box>  
  <Box>
  <Outlet />
  </Box>
  <Footer />
 </Box>
  )
}

export default App
