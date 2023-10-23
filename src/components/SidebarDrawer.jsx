import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody
} from '@chakra-ui/react'
import ChiliSlider from './ChiliSlider'
import CategorySelector from './CategorySelector'

export default function SidebarDrawer({ isOpen, onClose, btnRef, chiliRange, setChiliRange, setCategories }) {

    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent bg='teal'>
                <DrawerBody mt={2}>
                    <ChiliSlider chiliRange={chiliRange} setChiliRange={setChiliRange} />
                    <CategorySelector setCategories={setCategories} />
                </DrawerBody>

                {/* <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}