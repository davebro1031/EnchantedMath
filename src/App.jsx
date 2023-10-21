import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import ProblemsList from './components/ProblemsList'

export default function App() {

  const [query, setQuery] = useState("")

  return (
    <>
      <Header setQuery={setQuery} />
      <Box bg='purple.100'>

        <ProblemsList query={query} />
      </Box>
    </>
  )
}

