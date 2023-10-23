import { useNavigate, useParams } from 'react-router-dom'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Box, Text } from '@chakra-ui/react';
import { problems } from '../problems/data';
import Chilis from './Chilis'
import { useEffect } from 'react';

export default function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === Number(id))

    useEffect(() => {
        if (!problem) navigate("/notfound")
    }, [])


    return (
        <Box bg={'white'} p={3} m={4}>
            <Heading mb={3}> {problem.title}</Heading> 
            <Heading size='md'> Difficulty: <Chilis rating={problem.chilis}/></Heading>
            <Tabs colorScheme='red'>
                <TabList>
                    {/* fontWeight='bold' fontSize='20px' */}
                    <Tab >Problem</Tab>
                    <Tab >Solution</Tab>
                    <Tab >Feedback</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>

                        <Text mb={3}>{problem.text}</Text>

                        {problem.hints ?
                            <Tabs colorScheme='red'>
                                <TabList>
                                    <Tab>Hints</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        {problem.hints}
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            // <Box mb={3}>
                            //     <Heading size='md'>Hints</Heading>
                            //     <Text>{problem.hints}</Text>
                            // </Box >
                        : null }
                        <Tabs colorScheme='red'>
                            <TabList>
                                <Tab>See Also</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>Relate problems</TabPanel>
                            </TabPanels>
                        </Tabs>
                        {/* <Box>
                            <Heading size='md'>See also</Heading>
                            <Text>Related problems</Text>
                        </Box> */}
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