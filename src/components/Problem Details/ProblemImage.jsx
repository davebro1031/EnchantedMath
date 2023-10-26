import { Image } from "@chakra-ui/react"

export default function ProblemImage({ image }) {
    return (
        <Image src={image.src} alt={image.alt} boxSize='30%' float='left' />
    )
}