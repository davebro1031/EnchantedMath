import { useNavigate, useParams } from 'react-router-dom'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Box, Text, Spacer, Flex } from '@chakra-ui/react';
import { problems } from '../../problems/data';
import Hints from './Hints';
import RelatedProblems from './RelatedProblems';
import Chilis from '../Home/Chilis'
import { useEffect } from 'react';

export default function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === Number(id))

    useEffect(() => {
        if (!problem) navigate("/notfound")
    }, [])


    return (
        <Box bg={'white'} p={3} m={4} minHeight='80vh'>
            <Heading mb={3}> {problem.title}</Heading>
            <Heading size='md'> Difficulty: <Chilis rating={problem.chilis} /></Heading>
            <Tabs colorScheme='red'>
                <TabList>
                    {/* fontWeight='bold' fontSize='20px' */}
                    <Tab >Problem</Tab>
                    <Tab >Solution</Tab>
                    <Tab >Feedback</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel height='100%' flexGrow={1} display={'flex'}>
                        <Flex direction='column'>
                            <Text mb={3}>{problem.text}</Text>
                            <Spacer />
                            <Box>

                                {problem.hints ? <Hints hints={problem.hints} /> : null}
                                <RelatedProblems id={id} />
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <p>Solution</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Feedback</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}