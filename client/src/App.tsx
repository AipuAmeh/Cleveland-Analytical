import { Outlet } from 'react-router-dom'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'

function App() {

  return (
 <Box>
  <Header />
  <Box>
  <Outlet />
  </Box>
 </Box>
  )
}

export default App
