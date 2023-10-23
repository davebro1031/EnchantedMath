import { useNavigate, useParams } from 'react-router-dom'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Box, Text } from '@chakra-ui/react';
import { problems } from '../problems/data';
import { useEffect } from 'react';

export default function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === Number(id))

    useEffect(() => {
        if (!problem) navigate("/notfound")
    }, [])


    return (
        <Box>
            <Heading mb={3}> {problem.title} </Heading>
            <Tabs colorScheme='red'>
                <TabList>
                    <Tab>Problem</Tab>
                    <Tab>Solution</Tab>
                    <Tab>Feedback</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Text mb={3}>{problem.text}</Text>

                        {problem.hints ?
                            <Box mb={3}>
                                <Heading size='md'>Hints</Heading>
                                <Text>{problem.hints}</Text>
                            </Box >
                        : null }
                        <Box>
                            <Heading size='md'>See also</Heading>
                            <Text>Related problems</Text>
                        </Box>
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