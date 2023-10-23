import React, { useState } from 'react'
import { Input, useBreakpointValue } from '@chakra-ui/react'

function Search({ setQuery }) {
    const borderColor = useBreakpointValue({base:'yellow.400', md:'teal.300'})
    return (
        <Input
            width='auto'
            size='md'
            focusBorderColor={borderColor}
            color='white'
            placeholder='Search problems'
            _placeholder={{ color: 'white' }}
            onChange={e => setQuery(e.target.value)} />
    )
}

export default Search
