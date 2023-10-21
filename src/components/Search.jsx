import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

function Search({ setQuery }) {
    return (
        <Input
            width='auto'
            size='md'
            focusBorderColor='purple.500'
            color='white'
            placeholder='Search problems'
            _placeholder={{ color: 'white' }}
            onChange={e => setQuery(e.target.value)} />
    )
}

export default Search
