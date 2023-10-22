import { useState } from 'react'
import { Box } from '@chakra-ui/react'

import Header from './components/Header'
import ProblemsList from './components/ProblemsList'
import Sidebar from './components/Sidebar'

import './App.css'

export default function App() {

  const [query, setQuery] = useState("")
  const headerHeight = '66px'
  const sidebarWidth = '250px'

  return (
    <>
      <Header setQuery={setQuery} />
      <Box as="main" bg='orange.200' paddingTop={headerHeight} minHeight='100vh'>
        <Sidebar setQuery={setQuery} width={sidebarWidth} />
        <Box as="section" position='relative' left='250px' width={`calc(100% - ${sidebarWidth})`}>
          <ProblemsList query={query} />
        </Box>
      </Box>
    </>
  )
}

