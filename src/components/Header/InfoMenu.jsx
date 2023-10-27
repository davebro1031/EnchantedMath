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
            _hover={{bg:'red.500'}}
            _active={{bg:'red.500'}}
            />
            <MenuList>
                <MenuItem _hover={{bg:'teal.100'}}>About Nerd Snipes</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Contact Us</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Problem Submissions</MenuItem>
            </MenuList>
        </Menu>
    )
}