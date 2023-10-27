import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";


export default function InfoMenu() {
    return (
        <Menu autoSelect={false}>
            <MenuButton 
            as={IconButton}
            icon={<InfoIcon color='white' boxSize={6} />} 
            isRound
            bg='red.700'
            _hover={{bg:'red.800'}}
            _active={{bg:'red.500'}}
            />
            <MenuList border='3px solid #38B2AC'>
                <MenuItem _hover={{bg:'teal.100'}}>About Nerd Snipes</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Contact us</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Problem submissions</MenuItem>
            </MenuList>
        </Menu>
    )
}