import { useState, useRef, useEffect } from 'react'
import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import ProblemsList from './components/Home/ProblemsList'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css'
import SidebarDrawer from './components/Sidebar/SidebarDrawer'
import ProblemDetails from './components/Problem Details/ProblemDetails'
import { problems } from './problems/data'

export default function App() {

  // variables for the side drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  // variables for filtering problems
  const [query, setQuery] = useState("")
  const [chiliRange, setChiliRange] = useState([0, 3])
  const [categories, setCategories] = useState([
    "proportional reasoning",
    "graph theory",
    "combinatorics",
    "prime factors",
    "many variables",
    "series",
    "inequality",
    "potpourri",
  ])

  // layout variables
  const headerHeight = '61px'
  const sidebarWidth = '250px'
  const showSidebar = useBreakpointValue({ base: false, md: true })

  // filter the problem list
  const [filteredProblems, setFilteredProblems] = useState(problems)
  const [queriedProblems, setQueriedProblems] = useState([])

  const problemTextContainsQuery = (problem, str) => {
    const queryWords = str.toLowerCase().split(" ")
    if (str === "") return true

    const problemText = [
      problem.title,
      problem.text,
      problem.categories].join(" ").toLowerCase()

    let foundAllQueryWords = true
    for (let word of queryWords) foundAllQueryWords = foundAllQueryWords && problemText.includes(word)
    return foundAllQueryWords
  }

  // update filtered list via difficulty and category filters
  useEffect(() => {
    let filteredProblemList = problems
    filteredProblemList = filteredProblemList.filter(problem =>
      (problem.chilis >= chiliRange[0] && problem.chilis <= chiliRange[1])
    )
    filteredProblemList = filteredProblemList.filter(problem =>
      categories.some(category => problem.categories.includes(category))
    )
    setFilteredProblems(filteredProblemList)
  }, [chiliRange, categories])

  // update queried list, which uses the search to further specify the the filtered list
  useEffect(() => {
    const queriedList = filteredProblems.filter(
      problem => problemTextContainsQuery(problem, query)
    )
    setQueriedProblems(queriedList)
  }, [query, filteredProblems])


  return (
    <>
      <Header setQuery={setQuery} onOpen={onOpen} btnRef={btnRef} />
      <Box as="main" bg='orange.200' paddingTop={headerHeight} minHeight='100vh'>
        {showSidebar ?
          <Sidebar
            setQuery={setQuery}
            width={sidebarWidth}
            chiliRange={chiliRange}
            setChiliRange={setChiliRange}
            categories={categories}
            setCategories={setCategories}
          />
          : null}
        <Box
          as="section"
          position='relative'
          left={showSidebar ? sidebarWidth : 0}
          width={showSidebar ? `calc(100% - ${sidebarWidth})` : '100%'}
          p={2}>
          <Routes>
            <Route path="/" element={<ProblemsList queriedProblems={queriedProblems} />} />
            <Route path="/problem/:id" element={<ProblemDetails />} />
            <Route path="*" element={<div>404 not found</div>} />
          </Routes>
        </Box>
        <SidebarDrawer
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          chiliRange={chiliRange}
          setChiliRange={setChiliRange}
          categories={categories}
          setCategories={setCategories}
        />
      </Box>
    </>
  )
}

