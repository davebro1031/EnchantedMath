import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading, Spacer, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Chilis from './Chilis'

export default function ProblemCard({ problem }) {
    const navigate = useNavigate()
    return (
        <Card
            onClick={() => navigate(`/problem/${problem.id}`)}
            width='300px'
            marginBottom="1.5em"
            variant='elevated'
            _hover={{ boxShadow: '0 0 5px 3px #0BC5EA', cursor:'pointer' }}>
            <CardHeader>
                <Flex align='center'>
                    <Heading size='md'>{problem.title}</Heading>
                    <Spacer />
                    <Chilis rating={problem.chilis} />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text noOfLines={5}>{problem.text}</Text>
            </CardBody>
        </Card>
    )
}