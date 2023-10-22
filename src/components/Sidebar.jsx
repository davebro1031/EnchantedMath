import React from 'react'
import { VStack, Box, Button, Text, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

function Sidebar({ setQuery, width, setChiliRange }) {
    return (
        <VStack as="section" height='100%' width={width} bg='teal' position='fixed' left='0' gap='24px'>
            <Box />
            <VStack width='100%'>
                <Search setQuery={setQuery} />
                <Button> Advanced Search Options</Button>
                <Box width={`calc(${width} - 3em)`}>
                    <Text color='white'>Difficulty</Text>
                    <RangeSlider
                        onChangeEnd={(val) => setChiliRange(val)}
                        aria-label={['min', 'max']}
                        min={0}
                        max={3}
                        step={1}
                        defaultValue={[0, 3]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg="red.700" />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} _focus={{ boxShadow: '0 0 0 3px rgba(164, 40, 40, 0.6)' }} />
                        <RangeSliderThumb index={1} boxSize={7} _focus={{ boxShadow: '0 0 0 3px rgba(164, 40, 40, 0.6)' }}>
                            <FontAwesomeIcon icon={faPepperHot} />
                        </RangeSliderThumb>
                    </RangeSlider>
                </Box>
            </VStack>
        </VStack>
    )
}

export default Sidebar
