import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Flex } from '@chakra-ui/react';

import { problems } from '../../problems/data';
import { images } from '../../problems/images';
import { solutions } from '../../problems/solutions';

import Chilis from '../Home/Chilis'
import Problem from './Problem';
import Feedback from './Feedback';
import Solutions from './Solutions';


export default function ProblemDetails() {
    let { id } = useParams();
    id = Number(id)
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === id)
    const image = images.find(image => image.id === id)
    const solution = solutions.find(solution => solution.id === id)

    useEffect(() => {
        if (!problem) navigate("/notfound")
    }, [])


    return (
        <Flex bg={'white'} p={3} m={4} minHeight='80vh' direction='column' >
            <Heading mb={3}> {problem.title}</Heading>
            <Heading size='md'> Difficulty: <Chilis rating={problem.chilis} /></Heading>
            <Tabs colorScheme='red' flexGrow={1} display={'flex'} flexDirection='column'>
                <TabList>
                    <Tab >Problem</Tab>
                    {solution ? <Tab >Solution</Tab> : null}
                    <Tab >Feedback</Tab>
                </TabList>

                <TabPanels flexGrow={1} display={'flex'} flexDirection='column'>
                    <TabPanel flexGrow={1} display={'flex'} flexDirection='column' >
                        <Problem problem={problem} image={image} />
                    </TabPanel>
                    {solution ?
                        <TabPanel flexGrow={1} display={'flex'} flexDirection='column'>
                            <Solutions solution={solution}/>
                        </TabPanel>
                        : null
                    }
                    <TabPanel>
                        <Feedback title={problem.title} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}