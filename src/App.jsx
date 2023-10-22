import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import ProblemsList from './components/ProblemsList'
import Sidebar from './components/Sidebar'

export default function App() {

  const [query, setQuery] = useState("")
  const headerHeight = '56px'

  return (
    <>
      <Header setQuery={setQuery} />
      <Box bg='orange.200' p={headerHeight} minHeight='100vh'>
        <Sidebar setQuery={setQuery} />
        <Box>
          <ProblemsList query={query} />

        </Box>
      </Box>
    </>
  )
}

