import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProblemsList from './components/ProblemsList'

export default function App() {

  const [query, setQuery] = useState("")

  return (
    <>
      <Header setQuery={setQuery} />
      <ProblemsList query={query}/>
    </>
  )
}

