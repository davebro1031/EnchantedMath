import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import ProblemsList from './components/ProblemsList'
import Sidebar from './components/Sidebar'

export default function App() {

  const [query, setQuery] = useState("")
  const headerHeight = '52px'
  const sidebarWidth = '250px'

  return (
    <>
      <Header setQuery={setQuery} />
      <Box bg='orange.200' paddingTop={headerHeight} minHeight='100vh'>
        <Sidebar setQuery={setQuery} width={sidebarWidth} />
        <Box position='relative' left='250px' width={`calc(100% - ${sidebarWidth})`}>
          <ProblemsList query={query} />
        </Box>
      </Box>
    </>
  )
}

