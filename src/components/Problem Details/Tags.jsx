import { HStack, Tag } from "@chakra-ui/react"

export default function Tags({categories}) {
    return (
        <HStack>
            {categories.map(category => (
                <Tag>{category}</Tag>
            ))}
        </HStack>
    )
}