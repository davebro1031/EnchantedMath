import { useState, useRef } from 'react'
import { Box, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ProblemsList from './components/ProblemsList'
import Sidebar from './components/Sidebar'

import './App.css'
import SidebarDrawer from './components/SidebarDrawer'
import ProblemDetails from './components/ProblemDetails'

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
            <Route path="/" element={
              <ProblemsList
                query={query}
                chiliRange={chiliRange}
                categories={categories}
              />}
            />
            <Route path="/problem/:id" element={<ProblemDetails/>} />
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

