import { Menu, MenuButton, IconButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


export default function InfoMenu() {
    const navigate = useNavigate()
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
                <MenuItem _hover={{bg:'teal.100'}} onClick={()=>navigate('/about')}>About Nerd Snipes</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Contact us</MenuItem>
                <MenuItem _hover={{bg:'teal.100'}}>Problem submissions</MenuItem>
            </MenuList>
        </Menu>
    )
}