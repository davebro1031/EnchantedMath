import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'


export default function RelatedProblems({ id }) {
    return (
        <Tabs colorScheme='red' _hover={{cursor:'unset'}}>
            <TabList>
                <Tab>See Also</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>Related problems</TabPanel>
            </TabPanels>
        </Tabs>
    )
}