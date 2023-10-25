import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Box, Text, Spacer, Flex, Image } from '@chakra-ui/react';

import { problems } from '../../problems/data';
import { images } from '../../problems/images';

import Chilis from '../Home/Chilis'
import Hints from './Hints';
import RelatedProblems from './RelatedProblems';
import Feedback from './Feedback';
import Tags from './Tags';

export default function ProblemDetails() {
    let { id } = useParams();
    id = Number(id)
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === id)
    const problemImages = images.find(image => image.id === id)

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
                            <Flex gap='4'>
                                {problemImages ? <Image src={problemImages.image} boxSize='200px' /> : null}
                                <Text mb={3}>{problem.text}</Text>

                            </Flex>
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
                        <Feedback id={problem.id} title={problem.title} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}