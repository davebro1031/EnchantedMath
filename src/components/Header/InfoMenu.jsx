import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";


export default function InfoMenu() {
    return (
        <Menu>
            <MenuButton 
            as={IconButton}
            icon={<InfoIcon color='white' boxSize={6} />} 
            isRound
            bg='red.700'
            _hover={{bg:'red.600'}}
            />
            <MenuList>
                <MenuItem>Hello</MenuItem>
                <MenuItem>Hello</MenuItem>
                <MenuItem>Hello</MenuItem>
                <MenuItem>Hello</MenuItem>
            </MenuList>
        </Menu>
    )
}