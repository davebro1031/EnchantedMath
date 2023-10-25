import { useNavigate, useParams } from 'react-router-dom'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Box, Text, Spacer, Flex } from '@chakra-ui/react';
import { problems } from '../../problems/data';
import Hints from './Hints';
import RelatedProblems from './RelatedProblems';
import Chilis from '../Home/Chilis'
import Tags from './Tags';
import { useEffect } from 'react';
import Feedback from './Feedback';

export default function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === Number(id))

    useEffect(() => {
        if (!problem) navigate("/notfound")
    }, [])


    return (
        <Flex bg={'white'} p={3} m={4} minHeight='80vh' direction='column' >
            <Heading mb={3}> {problem.title}</Heading>
            <Heading size='md'> Difficulty: <Chilis rating={problem.chilis} /></Heading>
            <Tabs colorScheme='red' flexGrow={1} display={'flex'} flexDirection='column'>
                <TabList>
                    {/* fontWeight='bold' fontSize='20px' */}
                    <Tab >Problem</Tab>
                    <Tab >Solution</Tab>
                    <Tab >Feedback</Tab>
                </TabList>

                <TabPanels flexGrow={1} display={'flex'} flexDirection='column'>
                    <TabPanel flexGrow={1} display={'flex'} flexDirection='column' >
                        <Flex direction='column' grow='1'>
                            <Text mb={3}>{problem.text}</Text>
                            <Spacer />
                            <Box>
                                {problem.hints ? <Hints hints={problem.hints} /> : null}
                                <RelatedProblems id={id} />
                                {/* <Tags categories={problem.categories} /> */}
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <p>Solution</p>
                    </TabPanel>
                    <TabPanel>
                        <Feedback id={problem.id} title={problem.title}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}