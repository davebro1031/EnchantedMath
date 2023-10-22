import { useState } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'

import Header from './components/Header'
import ProblemsList from './components/ProblemsList'
import Sidebar from './components/Sidebar'

import './App.css'

export default function App() {

  const [query, setQuery] = useState("")
  const [chiliRange, setChiliRange] = useState([0, 3])
  const headerHeight = '61px'
  const sidebarWidth = '250px'
  const showSidebar = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <Header setQuery={setQuery} />
      <Box as="main" bg='orange.200' paddingTop={headerHeight} minHeight='100vh'>
        {showSidebar ? <Sidebar setQuery={setQuery} width={sidebarWidth} setChiliRange={setChiliRange} /> : null}
        <Box
          as="section"
          position='relative'
          left={showSidebar ? sidebarWidth : 0}
          width={showSidebar ? `calc(100% - ${sidebarWidth})` : '100%'}>
          <ProblemsList query={query} chiliRange={chiliRange} />
        </Box>
      </Box>
    </>
  )
}

