import React from 'react'
import { Box, Text, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, RangeSliderThumb } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

function ChiliSlider({setChiliRange}) {
    return (
        <Box width='100%'>
            <Text color='white' fontSize={20}>Difficulty</Text>
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
    )
}

export default ChiliSlider
