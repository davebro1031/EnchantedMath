import { useState } from 'react'
import './App.css'
import Header from './components/Header'

export default function App() {

  const [query, setQuery] = useState("")

  return (
    <>
      <Header setQuery={setQuery} />
      <div>{query}</div>
    </>
  )
}

