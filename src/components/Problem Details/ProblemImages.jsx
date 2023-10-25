import { Image } from "@chakra-ui/react"

export default function ProblemImages({images}){
    return (
        images.map(image => (
            <Image key={image.key} src={image.src} alt={image.alt} boxSize='200px' />
        ))
    )
}